import React, { useState } from "react";
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from "react-native";
import images from "../../assets/images";
import { Strings } from "../../constants";
import navigationStrings from "../../constants/navigationStrings";
import TabRoutes from "../../navigation/TabRoutes";
import styles from "./styles/LoginScreenStyles";

const LoginScreen = ({ navigation }) => {
  //useEffect(() => {}, []);

  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [isAutoFocusOn, setIsAutoFocusOn] = useState(true);
  const handleForgotPassword = () => {};

  const inputValidator = () => {
    // make api call
    // if userId and password matches
    // get type of user TM, TL, Org

    if (/^\s*$/.test(emailId) || /^\s*$/.test(password)) {
      Alert.alert("Email or Password cannot be empty space");
    } else {
      navigation.navigate(navigationStrings.TABS);
    }
  };
  const handleLogin = () => {
    const typeOfUser = inputValidator();
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flex: 1 }} bounces={false}>
        <View style={styles.container}>
          <View style={styles.topSection}>
            <Image
              source={images.logo}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.loginTextLine}>{Strings.loginTextLine}</Text>
          </View>
          <View style={styles.textInputSection}>
            <View style={styles.inputFieldWrapper}>
              {/* <Text style={styles.keyText}>{Strings.emailText}</Text> */}
              <TextInput
                style={[
                  styles.textInputField,
                  styles.textInputFieldLengthForEmail,
                ]}
                placeholder={Strings.emailPlaceholder}
                value={emailId}
                onChangeText={(text) => setEmailId(text)}
                multiline={false}
                autoFocus={isAutoFocusOn}
              />
            </View>
            <View style={styles.inputFieldWrapper}>
              <TextInput
                style={[
                  styles.textInputField,
                  styles.textInputFieldLengthForPassword,
                ]}
                placeholder={Strings.passwordText}
                secureTextEntry={showPassword}
                value={password}
                onChangeText={(text) => setPassword(text)}
                multiline={false}
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                style={styles.eyeIconContainer}
              >
                <Image
                  source={images.eye}
                  style={styles.eyeIcon}
                  resizeMode={"contain"}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.bottomButtonsContainer}>
            {/* <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{Strings.google}</Text>
        </TouchableOpacity> */}
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>{Strings.loginTitle}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.forgotPasswordSection}>
            <Text style={styles.forgotPassword}>{Strings.forgotPassword}</Text>
            <TouchableOpacity onPress={handleForgotPassword}>
              <Text style={styles.touchME}>{Strings.touchME}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
