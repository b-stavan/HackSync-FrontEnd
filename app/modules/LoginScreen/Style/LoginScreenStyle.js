import { StyleSheet } from "react-native";
import Colors from "../../../themes/Colors";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../themes/Metrices";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
  backgroundImageStyle: {
    flex: 1,
  },
  loginContainer: {
    alignItems: "center",
  },
  logoStyle: {
    marginVertical: verticalScale(120),
    width: moderateScale(100),
    height: moderateScale(100),
    tintColor: Colors.navyBlue,
  },
  buttonStyle: {
    backgroundColor: Colors.green,
    width: horizontalScale(280),
    height: verticalScale(40),
    justifyContent: "center",
    margin: verticalScale(15),
    borderRadius: moderateScale(10),
  },
  buttonText: {
    padding: moderateScale(2),
    color: "black",
    textAlign: "center",
  },
});

export default styles;
