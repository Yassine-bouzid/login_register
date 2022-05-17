import React from "react";
import {
  Text,
  SafeAreaView,
  View,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
export default function SignIn() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/login.png")}
        style={{ justifyContent: "center", flex: 1 }}
      >
        <ScrollView style={styles.scroll}>
          <View style={styles.view1}>
            <Image
              style={styles.stretch}
            />
          </View>

          <View style={{ alignItems: "center" }}>
            <Text style={styles.text}>username</Text>
          </View>

          <View style={styles.view2}>
            <TextInput
              style={styles.input}
              placeholder="e.g.Mohammed"
            ></TextInput>
          </View>

          <View style={{ alignItems: "center" }}>
            <Text style={styles.text}>password</Text>
          </View>

          <View style={styles.view2}>
            <TextInput style={styles.input} secureTextEntry={true}></TextInput>
          </View>

          <View style={styles.view3}>
            <TouchableOpacity style={styles.button} onPress={() => alert("hi")}>
              <Text style={{ color: "white", fontSize: 16 }}>SIGN IN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button1} onPress={() => alert("hi")}>
              <Text style={{ color: "white", fontSize: 16 }}>Google</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
/*
styling --------------------------------------------------
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  scroll: {
    marginHorizontal: 0,
    marginVertical: 0,
    padding: 0,
    margin: 0,
  },
  view1: {
    alignItems: "center",
    height: "40%",
    flex: 1,
  },
  view2: {
    flex: 1,
    alignItems: "center",
  },

  view3: {
    flex: 1,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#FFC086",
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    height: 50,
    width: "55%",
    margin: 10,
    marginTop: 25,
    borderRadius:5
  },
  button1: {
    backgroundColor: "tomato",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: "85%",
    margin: 10,
    marginTop: 25,
    borderRadius:50
  },
  stretch: {
    marginTop: 100,
    width: 150,
    height: 110,
  },

  input: {
    width: "85%",
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: "white",
    borderRadius:5
  },

  text: {
    width: "84%",
    fontSize: 16,
    fontWeight: "bold",
  },
});
