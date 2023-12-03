import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import DocumentScanner from 'react-native-document-scanner-plugin';

export default ({ route, navigation }) => {
  const [scannedImage, setScannedImage] = useState(null);
  const from = route.params.from;
  const data = route.params.data;
  const scanDocument = async () => {
    // start the document scanner
    const { scannedImages } = await DocumentScanner.scanDocument();

    // get back an array with scanned image file paths
    if (scannedImages.length > 0) {
      // set the img src, so we can view the first scanned image
      setScannedImage(scannedImages); // Assuming you want the first scanned image
    }
  };

  useEffect(() => {
    // call scanDocument on load
    scanDocument();
  }, []);

  useEffect(() => {
    // Navigate to "Agreement" screen when scannedImage changes
    if (scannedImage) {
      navigation.navigate(from, { scannedImage, data });
    }
  }, [scannedImage, navigation]);

  return <Text>123</Text>;
};