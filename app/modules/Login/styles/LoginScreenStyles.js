import { StyleSheet } from "react-native";
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../themes";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  topSection: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: verticalScale(100),
    width: horizontalScale(100),
    marginTop: verticalScale(100),
  },
  loginTextLine: {
    fontSize: moderateScale(25),
    marginTop: verticalScale(60),
    fontWeight: "800",
    color: Colors.navyBlue,
  },
  textInputSection: {
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: verticalScale(20),
  },
  inputFieldWrapper: {
    flexDirection: "row",
    marginTop: verticalScale(20),
    borderRadius: moderateScale(10),
    alignItems: "center",
    height: verticalScale(50),
    width: horizontalScale(300),
    backgroundColor: Colors.lightGrey,
    padding: moderateScale(8),
  },
  keyText: {
    fontSize: moderateScale(20),
  },
  textInputField: {
    fontSize: moderateScale(20),
    marginLeft: horizontalScale(10),
    height: verticalScale(100),
  },
  bottomButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: verticalScale(30),
  },
  button: {
    backgroundColor: Colors.navyBlue,
    height: verticalScale(50),
    width: moderateScale(300),
    borderRadius: moderateScale(10),
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: Colors.white,
    fontWeight: "500",
    fontSize: moderateScale(20),
  },
  forgotPasswordSection: {
    flexDirection: "row",
    marginTop: verticalScale(100),
    justifyContent: "center",
    alignItems: "center",
  },
  forgotPassword: {
    fontSize: moderateScale(20),
    color: Colors.textColor,
  },
  touchME: {
    fontSize: moderateScale(20),
    color: Colors.navyBlue,
    fontWeight: "bold",
  },
  eyeIcon: {
    height: moderateScale(25),
    width: moderateScale(25),
  },
  eyeIconContainer: {
    position: "absolute",
    right: moderateScale(20),
  },
});

export default styles;
