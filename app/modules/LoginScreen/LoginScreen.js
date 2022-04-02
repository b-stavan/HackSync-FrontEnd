import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import styles from "./Style/LoginScreenStyle";

const LoginScreen = () => {
  const [hackathon, setHackathon ] = ();
  return (
    <ImageBackground
      source={{
        uri: "https://img.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg?t=st=1648881668~exp=1648882268~hmac=eaa93e39c7d727ebfa9cb633a6b7ea13459abb5df9e0a87904f641ef5d39d6d8&w=360",
      }}
      style={styles.backgroundImageStyle}
      imageStyle={{ opacity: 0.1 }}
    >
      <View style={styles.loginContainer}>
        <Image
          source={{
            uri: "https://cdn-icons.flaticon.com/png/512/310/premium/310818.png?token=exp=1648890928~hmac=55afc3dcb43f02adff050151de62de5f",
          }}
          style={styles.logoStyle}
        />
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => console.log("create Clicked")}
        >
          <Text style={styles.buttonText}>Create Hackathon</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => console.log("join Clicked")}
        >
          <Text style={styles.buttonText}>Join Hackathon</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
