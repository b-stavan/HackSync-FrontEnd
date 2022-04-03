import { StyleSheet } from "react-native";
import Colors from "../../../themes/Colors";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../themes/Metrices";

const styles = StyleSheet.create({
  backgroundImageStyle: {
    flex: 1,
  },
  loginContainer: {
    alignItems: "center",
  },
  logoStyle: {
    marginVertical: verticalScale(120),
    width: moderateScale(130),
    height: moderateScale(130),
  },
  buttonStyle: {
    backgroundColor: Colors.navyBlue,
    width: horizontalScale(280),
    height: verticalScale(45),
    justifyContent: "center",
    margin: verticalScale(15),
    borderRadius: moderateScale(10),
  },
  buttonText: {
    padding: moderateScale(4),
    color: Colors.white,
    fontWeight: "500",
    textAlign: "center",
  },
  loginStatusStyle: {
    marginVertical: verticalScale(85),
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: Colors.navyBlue,
    width: horizontalScale(130),
    height: verticalScale(38),
    justifyContent: "center",
    margin: verticalScale(8),
    borderRadius: moderateScale(10),
  },
});

export default styles;
