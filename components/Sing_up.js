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
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
export default function SignUp() {
  return (
    <View style={styles.container}>

    <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require("../assets/dd.png")}
          style={{ justifyContent: "center", flex: 1 }}
        >
      <ScrollView style={styles.scroll}>
          <View style={styles.viewSpace}></View>

          <View style={{ alignItems: "center" }}>
            <Text style={styles.text}>username</Text>
          </View>

          <View style={styles.view1}>
            <TextInput
              style={styles.input}
              placeholder="e.g.Mohammed"
            ></TextInput>
          </View>

          <View style={{ alignItems: "center" }}>
            <Text style={styles.text}>email</Text>
          </View>

          <View style={styles.view2}>
            <TextInput
              style={styles.input}
              placeholder="example@gmail.com"
            ></TextInput>
          </View>

          <View style={{ alignItems: "center" }}>
            <Text style={styles.text}>password</Text>
          </View>

          <View style={styles.view3}>
            <TextInput style={styles.input} secureTextEntry={true}></TextInput>
          </View>

          <View style={{ alignItems: "center" }}>
            <Text style={styles.text}>confirm password</Text>
          </View>

          <View style={styles.view4}>
            <TextInput style={styles.input} secureTextEntry={true}></TextInput>
          </View>

          <View style={styles.viewButton}>
            <TouchableOpacity
              style={styles.buttonSign_up}
              onPress={() => alert("sign up")}
            >
              <Text style={{ color: "white", fontSize: 16 }}>Sing up</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonGoogle}
              onPress={() => alert("google")}
            >
              <Text style={{ color: "white", fontSize: 16 }}>Google</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.viewSpace}></View>
      </ScrollView>
        </ImageBackground>
    </SafeAreaView>
    </View>
  );
}
/*
styling --------------------------------------------------
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f6ff",
  },
  space: {
    backgroundColor: "aqua",
    width: "100%",
    height: "20%",
  },
  scroll: {
    marginHorizontal: 0,
    flex: 0,
  },
  view1: {
    flex: 1,
    alignItems: "center",
  },
  view2: {
    flex: 1,
    alignItems: "center",
  },

  view3: {
    flex: 1,
    alignItems: "center",
  },
  view4: {
    flex: 1,
    alignItems: "center",
  },
  viewSpace: {
    flex: 1,
    alignItems: "center",
    height: 120,
  },
  viewButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonSign_up: {
    backgroundColor: "#2196F3",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 5,
    height: 50,
    width: "40%",
    margin: 10,
  },
  buttonGoogle: {
    backgroundColor: "tomato",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 5,
    height: 50,
    width: "40%",
    margin: 10,
  },
  input: {
    width: "85%",
    padding: 10,
    borderWidth: 0.2,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 25,
    backgroundColor: "white",
  },

  text: {
    width: "84%",
    fontSize: 16,
    fontWeight: "bold",
  },
});
