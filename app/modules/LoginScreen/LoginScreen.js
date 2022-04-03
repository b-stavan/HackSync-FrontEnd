import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import images from "../../assets/images";
import styles from "./Style/LoginScreenStyle";

const LoginScreen = () => {
  return (
    <ImageBackground
      source={images.background}
      resizeMode="stretch"
      imageStyle={{ opacity: 0.15 }}
      style={styles.backgroundImageStyle}
    >
      <View style={styles.loginContainer}>
        <Image
          source={images.logo}
          resizeMode="contain"
          style={styles.logoStyle}
        />
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.7}
          onPress={() => console.log("create Clicked")}
        >
          <Text style={styles.buttonText}>Create Hackathon</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.7}
          onPress={() => console.log("join Clicked")}
        >
          <Text style={styles.buttonText}>Join Hackathon</Text>
        </TouchableOpacity>
        <View style={styles.loginStatusStyle}>
          <Text>Already User?</Text>
          <TouchableOpacity
            style={styles.loginButton}
            activeOpacity={0.7}
            onPress={() => console.log("LoginClicked")}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
