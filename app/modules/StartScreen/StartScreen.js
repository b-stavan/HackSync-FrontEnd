import React from "react";
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import images from "../../assets/images";
import navigationStrings from "../../constants/navigationStrings";
import styles from "./Style/LoginScreenStyle";

const StartScreen = ({ navigation }) => {
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
          onPress={() =>
            navigation.navigate(navigationStrings.ORG_REGISTRATION)
          }
        >
          <Text style={styles.buttonText}>Create Hackathon</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.7}
          onPress={() => navigation.navigate(navigationStrings.JOIN_STACK)}
        >
          <Text style={styles.buttonText}>Join Hackathon</Text>
        </TouchableOpacity>
        <View style={styles.loginStatusStyle}>
          <Text>Already User?</Text>
          <TouchableOpacity
            style={styles.loginButton}
            activeOpacity={0.7}
            onPress={() => navigation.navigate(navigationStrings.LOGIN_SCREEN)}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default StartScreen;
