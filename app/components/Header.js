import { View, Text, Switch } from "react-native";
import React, { useState } from "react";
import styles from "./styles/HeaderStyles";

const Header = ({ title }) => {
  const [profile, setProfile] = useState("TM");
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>HackSync</Text>
      <Text style={styles.greetingText}>Hello hacker</Text>
    </View>
  );
};

export default Header;
