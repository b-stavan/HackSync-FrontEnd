import { View, Text, Image, ImageBackground } from "react-native";
import React from "react";
import images from "../../assets/images";
import styles from "./style/Introstyle";
import Strings from "../../constants/Strings";

const IntroScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imgStyle}
        imageStyle={{ opacity: 0.15 }}
        source={images.background}
      >
        <View style={styles.imgViewContainer}>
          <Image
            resizeMode="contain"
            style={styles.imgView}
            source={images.logo}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>{Strings.title}</Text>
        </View>
        <View style={styles.bigTextContainer}>
          <Text style={styles.bigTextStyle}>{Strings.BigText}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default IntroScreen;
