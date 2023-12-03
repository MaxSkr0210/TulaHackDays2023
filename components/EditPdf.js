import React, { useEffect, useState } from 'react';
import { StyleSheet, Dimensions, View, Button } from 'react-native';
import Pdf from 'react-native-pdf';
import RNFetchBlob from "rn-fetch-blob";


export default function PDFViewer() {
  const [pdfPath, setPdfPath] = useState(null);

  const downloadPdf = () => {
    RNFetchBlob.config({
      fileCache: true,
      appendExt: 'pdf',
    })
      .fetch('GET', "https://samakonalocal.ru/get_pdf")
      .then(res => {
        setPdfPath(res.path());

        alert(`Файл сохранен, ${res.path()}`)
        console.log('Файл загружен в:', res.path());
      })
      .catch(error => {
          console.error('Ошибка загрузки файла:', error);
          Alert.alert('Ошибка', 'Не удалось загрузить PDF-файл.');
      });
  };



  useEffect(() => {
    downloadPdf()
  }, []);

  return (
      <View style={{ flex: 1 }}>
        {pdfPath ? (
          // Если PDF-файл загружен, отображаем его с помощью react-native-pdf
          <Pdf source={{ uri: `file://${pdfPath}`, cache: true }} style={{ flex: 1 }} />
        ) : (
          // Если PDF-файл еще не загружен, отображаем кнопку для его загрузки
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Загрузить PDF" onPress={downloadPdf} />
          </View>
        )}
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});