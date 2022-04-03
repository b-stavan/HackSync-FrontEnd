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
    alignItems: "center",
  },
  mainScreenContainer: {
    flex: 1,
    alignItems: "center",
  },
  headerContainer: {
    height: verticalScale(55),
    width: "95%",
    justifyContent: "center",
    tintColor: "#042a4f",
    width: moderateScale(80),
    height: moderateScale(80),
    marginVertical: verticalScale(15),
  },
  headerText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  nameStyle: {
    fontSize: moderateScale(15),
    color: "#7c8d9e",
    fontWeight: "500",
    marginVertical: verticalScale(6),
  },
  fieldScreenContainer: {
    // height: verticalScale(600),
  },
  fieldContainer: {
    marginBottom: verticalScale(10),
  },
  inputFieldContainer: {
    width: horizontalScale(330), //300
    height: verticalScale(50), //50
    padding: moderateScale(5),
    borderRadius: moderateScale(8),
    borderWidth: 2,
    borderColor: "#e6e5e9",
    backgroundColor: "#f0f3fd",
    color: Colors.navyBlue,
    fontSize: moderateScale(18),
  },
  buttonStyle: {
    backgroundColor: "#042a4f",
    width: "80%",
    justifyContent: "center",
    borderRadius: moderateScale(10),
    padding: 0,
    height: verticalScale(50),
    marginVertical: verticalScale(20),
  },
  buttonText: {
    textAlign: "center",
    padding: 10,
    color: Colors.white,
    fontWeight: "500",
    fontSize: moderateScale(15),
  },
});

export default styles;
