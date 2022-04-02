import { StyleSheet } from "react-native";
import { Colors, moderateScale, verticalScale } from "../../themes";

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.navyBlue,
    height: verticalScale(100),
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: Colors.white,
    fontSize: moderateScale(40),
  },
  greetingText: {
    color: Colors.white,
    fontSize: moderateScale(20),
  },
});

export default styles;
