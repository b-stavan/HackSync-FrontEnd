import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";

import styles from "./style/OrganizationRegistrationScreenStyle";

const FieldContainer = ({
  nameField,
  keyboard,
  changeText,
  maximumLength,
  valueOfField,
}) => {
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.nameStyle}>{`${nameField} :`}</Text>
      <TextInput
        style={styles.inputFieldContainer}
        keyboardType={keyboard}
        onChangeText={changeText}
        maxLength={maximumLength}
        value={valueOfField}
      />
    </View>
  );
};

const OrganizationRegistrationScreen = () => {
  const [organizationName, setOrganizationName] = useState("");
  const [hackName, setHackName] = useState("");
  const [hackDate, setHackDate] = useState("");
  const [hours, setHours] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [organizationEmail, setOrganizationEmail] = useState("");
  const [password, setPassword] = useState("");
  const [venue, setVenue] = useState("");

  useEffect(() => {
    getCurrentDate();
  }, []);

  const getCurrentDate = () => {
    const date = new Date().getDate();
    const month = new Date().getMonth() + 2;
    const year = new Date().getFullYear();
    setHackDate(date + "-" + month + "-" + year);
  };

  const organizationNameChange = (text) => {
    setOrganizationName(text);
  };

  const hackNameChange = (text) => {
    setHackName(text);
  };

  const hackDateChange = (text) => {
    setHackDate(text);
  };

  const hourChange = (text) => {
    setHours(text.replace(/[^0-9]/g, ""));
  };

  const teamSizeChange = (text) => {
    setTeamSize(text.replace(/[^0-9]/g, ""));
  };

  const passwordChange = (text) => {
    setPassword(text);
  };

  const organizationEmailChange = (text) => {
    setOrganizationEmail(text);
  };

  const venueChange = (text) => {
    setVenue(text);
  };

  const alertNotification = (title, message) => {
    Alert.alert(title, message);
  };

  const registerPressHandler = () => {
    let emailValidator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    let passwordValidator =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!.,\\@#\$%\^&\*])(?=.{8,})/;

    if (
      Number(organizationEmail.length) === 0 ||
      Number(password.length) === 0 ||
      Number(organizationName.length) === 0 ||
      Number(hackName.length) === 0 ||
      Number(hackDate.length) === 0 ||
      Number(hours.length) === 0 ||
      Number(teamSize.length) === 0 ||
      Number(venue.length) === 0
    ) {
      alertNotification("Hang on!", "Fill all Field ");
    } else if (emailValidator.test(organizationEmail) === false) {
      alertNotification("Invalid Email", "Email Format: abc@gmail.com");
    } else if (passwordValidator.test(password) === false) {
      alertNotification(
        "Invalid Password",
        "Password must be 8 character with minimum 1 Capital letter, 1 Small letter, 1 Special Character"
      );
    } else {
      let token = Math.random().toString(36).slice(2, 8);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.mainScreenContainer}
    >
      <Image
        source={{
          uri: "https://cdn0.iconfinder.com/data/icons/octicons/1024/organization-512.png",
        }}
        style={styles.headerContainer}
      />
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <FieldContainer
          nameField="Organization Name"
          changeText={organizationNameChange}
        />
        <FieldContainer
          nameField="Hackathon Name"
          changeText={hackNameChange}
        />
        <FieldContainer
          nameField="Hackathon Date"
          changeText={hackDateChange}
          valueOfField={hackDate}
        />
        <FieldContainer
          keyboard="number-pad"
          nameField="Hours"
          changeText={hourChange}
          maximumLength={2}
        />
        <FieldContainer
          keyboard="number-pad"
          nameField="Team Size"
          changeText={teamSizeChange}
          maximumLength={2}
        />

        <FieldContainer
          nameField="Organization Email"
          keyboard="email-address"
          changeText={organizationEmailChange}
        />
        <FieldContainer nameField="Password" changeText={passwordChange} />
        <FieldContainer nameField="Venue" changeText={venueChange} />
      </ScrollView>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={registerPressHandler}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default OrganizationRegistrationScreen;
