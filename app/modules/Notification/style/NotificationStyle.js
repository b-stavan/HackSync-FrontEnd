import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../../themes";
import Colors from "../../../themes/Colors";

export const styles = StyleSheet.create({
  notificationContainer: {
    flex: 1,
    marginTop: verticalScale(30),
  },
  notification: {
    flexDirection: "row",
    paddingHorizontal: horizontalScale(20),
  },
  imageContainer: {},
  imageStyle: {
    width: moderateScale(55),
    height: moderateScale(55),
    tintColor: Colors.borderColorGrey,
  },
  textContainer: {
    flex: 1,
    paddingLeft: 20,
    height: 100,
  },
  text: {
    fontWeight: "bold",
    fontSize: moderateScale(18),
    marginBottom: verticalScale(2),
    color: Colors.navyBlue,
  },
  description: {
    textAlign: "justify",
    color: Colors.textColor,
  },
});
