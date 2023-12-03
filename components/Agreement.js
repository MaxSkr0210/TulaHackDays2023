import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import axios from 'axios';
import RNFS from 'react-native-fs';

const Agreement = ({ route, navigation }) => {
  const [file, setFile] = useState(null);
  const [imgs, setImgs] = useState([]);

  const data = {};

  useEffect(() => {
    if (route.params && route.params.scannedImage) {
      setImgs(route.params.scannedImage);
    }
  }, [route.params]);

  const uploadFile = async () => {
    const formData = new FormData();

    if (imgs.length > 0) {
      for (let i = 0; i < imgs.length; i++) {
        const uri = await RNFS.readFile(imgs[i], 'base64');

        formData.append(`photo${i}`, {
          uri,
          name: `photo_${i}.jpg`,
          type: 'image/jpeg', // Укажите правильный MIME-тип для изображения
        });
      }
      data.agreement = ["jpg", formData];
    } else if (file) {
    const uri = await RNFS.readFile(filt.uri, 'base64');
      formData.append("pdf", {
        uri,
        name: `file.pdf`,
        type: 'application/pdf', // Укажите правильный MIME-тип для PDF
      });
      data.agreement = ["pdf", formData];
    }

    // Ваш запрос axios здесь
    navigation.navigate("Претензия", { data });
  };

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      setFile(result[0]);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        return;
      } else {
        console.error(err);
      }
    }
  };

    function goBack(){
        navigation.navigate("")
    }

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image style={styles.img} source={ require("./book.png")} />
        <Text style={styles.inLogo}>ТулаЛенс</Text>
      </View>
      <View></View>
      <Button title="Выберите файл" onPress={pickDocument} />
      <View style={{ marginTop: 150 }}>
        {(file || imgs.length > 0) && (
          <Button title="Загрузить" onPress={uploadFile} />
        )}
        <Button title="Сделать снимок" onPress={() => { navigation.navigate("Камера", { from: "Договор", data }) }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
          alignItems: 'center',
          backgroundColor: "#111",
          width: "100%",
          paddingTop: 30,
  },
    back:{
        alignSelf: "flex-start",
    },
   logo:{
          flexDirection: "row",
          alignItems: "center",
      },
      img:{
        width: 40,
        height: 40,
      },
      inLogo:{
        marginLeft: 8,
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold"
      },
      imgs:{
        flexDirection: "row",
        justifyContent: "space-between",
      },
  mb: {
    marginBottom: 80,
  },
  list: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: 300,
  },
  img: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
});

export default Agreement;