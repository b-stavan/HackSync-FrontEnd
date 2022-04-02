import { StyleSheet } from "react-native";
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../themes";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(10),
  },
  titleText: {
    color: Colors.navyBlue,
    fontWeight: "bold",
    fontSize: moderateScale(30),
  },
  switchToTlSection: {
    backgroundColor: "purple",
    height: verticalScale(100),
  },
  problemStatementInput: {
    backgroundColor: "pink",
    height: verticalScale(30),
  },
  teamLeadSection: {
    width: "80%",
    alignSelf: "center",
  },
  teamLeadButton: {
    backgroundColor: Colors.navyBlue,
    height: verticalScale(35),
    width: horizontalScale(200),
    borderRadius: moderateScale(20),
    justifyContent: "center",
    alignItems: "center",
    marginTop: verticalScale(20),
    alignSelf: "center",
  },
  teamLeadButtonText: {
    color: Colors.white,
    fontWeight: "500",
    fontSize: moderateScale(15),
  },
  tlText: {
    fontSize: moderateScale(20),
  },
  modalContainer: {
    // backgroundColor: Colors.navyBlue,
    marginVertical: "30%",
    marginHorizontal: "10%",
    flex: 1,
    // borderBottomRightRadius: moderateScale(30),
    // borderTopLeftRadius: moderateScale(30),
    alignItems: "center",
  },
  modalParentContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  logoImage: {
    height: verticalScale(150),
    width: horizontalScale(150),
    borderRadius: 1000,
    marginTop: verticalScale(50),
  },
  teamNameInputField: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    height: verticalScale(30),
    width: horizontalScale(200),
    padding: 5,
    borderRadius: moderateScale(10),
    marginTop: verticalScale(10),
    color: Colors.white,
  },
  problemStatementInputField: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    height: verticalScale(100),
    width: horizontalScale(200),
    padding: 5,
    borderRadius: moderateScale(10),
    marginTop: verticalScale(10),
    color: Colors.white,
  },
  modalDetailsContainer: {
    flex: 1,
  },
  modalText: {
    color: "black",
    fontSize: moderateScale(18),
    marginTop: verticalScale(15),
  },
  modalButton: {
    height: verticalScale(30),
    marginTop: verticalScale(15),
    borderRadius: moderateScale(10),
    justifyContent: "center",
    alignItems: "center",
  },
  modalButtonSubmit: {
    backgroundColor: "green",
  },
  modalButtonCancel: {
    backgroundColor: "red",
  },
  modalButtonText: {
    color: Colors.white,
    fontWeight: "bold",
  },
});

export default styles;
