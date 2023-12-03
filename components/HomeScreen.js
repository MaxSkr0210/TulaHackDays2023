import { View, Button, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';

//

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image style={styles.img} source={ require("./book.png")} />
        <Text style={styles.inLogo}>ТулаЛенс</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.inBody}>Добро пожаловать</Text>
        <Image style={styles.imgInBody} source={ require("./17.png")} />
      </View>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Договор")}>
        <Text style={styles.inBtn}>Создать иск</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: "#111",
      width: "100%",
      paddingTop: 60,
      paddingBottom: 60,
    },
    logo:{
        flexDirection: "row",
        alignItems: "center",
    },
    img:{
      width: 70,
      height: 70,
    },
    inLogo:{
      marginLeft: 15,
      fontSize: 26,
      color: "#fff",
      fontWeight: "bold"
    },
    imgInBody:{
        position: "absolute",
        top: 150,
        left: 30
    },
    body:{
      marginTop: 50
    },
    inBody:{
      fontSize: 22,
      color: "#fff"
    },
    btn:{
      position: "absolute",
      bottom: 60,
      backgroundColor: "#3772FF",
      paddingBottom: 14,
      paddingTop: 14,
      paddingLeft: 59,
      paddingRight: 59,
      borderRadius: 13,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inBtn:{
      color: "#fff",
      fontSize: 20,
      fontWeight: '800',
    }
})

export default HomeScreen