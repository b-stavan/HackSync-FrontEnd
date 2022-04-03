import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import { styles } from "./style/NotificationStyle";
import images from "../../assets/images";
const notificationData = [
  {
    id: 1,
    title: "Lunch Break",
    Description:
      "I'm Hacksync I'm Hacksync I'm Hacksync I'm Hacksync I'm Hacksync .",
    image: images.logo,
  },
  {
    id: 2,
    title: "Refreshment",
    Description:
      "I'm Hacksync I'm Hacksync I'm Hacksync I'm Hacksync I'm Hacksyn .",
    image: images.logo,
  },
  {
    id: 3,
    title: "Dinner",
    Description:
      "I'm Hacksync I'm Hacksync I'm Hacksync I'm Hacksync I'm Hacksync.",
    image: images.logo,
  },
  {
    id: 4,
    title: "Refreshment",
    Description:
      "I'm Hacksync I'm Hacksync I'm Hacksync I'm Hacksync I'm Hacksync.",
    image: images.logo,
  },
  {
    id: 5,
    title: "Refreshment",
    Description:
      "I'm Hacksync I'm Hacksync I'm Hacksync I'm Hacksync I'm Hacksync.",
    image: images.logo,
  },
  {
    id: 6,
    title: "Refreshment",
    Description:
      "I'm Hacksync I'm Hacksync I'm Hacksync I'm Hacksync I'm Hacksync.",
    image: images.logo,
  },
  {
    id: 7,
    title: "Refreshment",
    Description:
      "I'm Hacksync I'm Hacksync I'm Hacksync I'm Hacksync I'm Hacksync.",
    image: images.logo,
  },
  {
    id: 8,
    title: "Refreshment",
    Description:
      "I'm Hacksync I'm Hacksync I'm Hacksync I'm Hacksync I'm Hacksync.",
    image: images.logo,
  },
];
const Notification = () => {
  const NotificationCall = ({ item }) => {
    return (
      <View style={styles.notification}>
        <View style={styles.imageContainer}>
          <Image
            source={item.image}
            style={styles.imageStyle}
            resizeMode="contain"
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{item.title}</Text>
          <Text style={styles.description}>{item.Description}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.notificationContainer}>
      <FlatList
        data={notificationData}
        keyExtractor={(item) => item.id}
        renderItem={NotificationCall}
        showsVerticalScrollIndicator={false}
        bounces={false}
      />
    </View>
  );
};

export default Notification;
