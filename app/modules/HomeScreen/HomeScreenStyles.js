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
    marginVertical: "0%",
    marginHorizontal: "0%",
    flex: 1,
    // borderBottomRightRadius: moderateScale(30),
    // borderTopLeftRadius: moderateScale(30),
    alignItems: "center",
    justifyContent: "center",
  },
  modalParentContainer: {
    flex: 1,

    // backgroundColor: Colors.white,
  },
  logoImage: {
    height: verticalScale(150),
    width: horizontalScale(150),
    borderRadius: 1000,
    borderWidth: 3,
    borderColor: Colors.white,
    // marginTop: verticalScale(50),
  },
  borderWrapper: {
    borderWidth: 3,
    borderColor: Colors.navyBlue,
    borderRadius: 1000,
  },
  teamNameInputField: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    height: verticalScale(40),
    width: "100%",
    padding: 5,
    borderRadius: moderateScale(10),
    marginTop: verticalScale(10),
    color: Colors.white,
  },
  problemStatementInputField: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    height: verticalScale(220),
    width: "100%",
    padding: 5,
    borderRadius: moderateScale(10),
    marginTop: verticalScale(10),
    color: Colors.white,
  },
  modalDetailsContainer: {
    // backgroundColor: "red",
    width: "80%",
    justifyContent: "center",

    // flex: 1,
  },
  buttonWrapper: {
    flexDirection: "row-reverse",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  modalText: {
    color: "black",
    fontSize: moderateScale(18),
    marginTop: verticalScale(15),
  },
  modalButton: {
    height: verticalScale(40),
    marginTop: verticalScale(20),
    width: "47%",
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
