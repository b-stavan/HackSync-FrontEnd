import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../themes";
import { Strings } from "../constants";

const TeamLeadCard = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
          }}
          style={styles.leaderImage}
          resizeMode={"contain"}
        />
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.bodyTitleText}>Kavin Mehta</Text>
        <View style={styles.stack}>
          <Text style={styles.bodyTextStack}>Stack: {Strings.stack}</Text>
        </View>
        <Text style={styles.bodyTitleText}>{Strings.problemStatement}:</Text>
        <Text style={styles.bodyText}>{props.data.problemStatement}</Text>
      </View>
    </View>
  );
};

export default TeamLeadCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    marginVertical: verticalScale(30),
    height: verticalScale(300),
    width: horizontalScale(220),
    marginLeft: horizontalScale(30),
    borderBottomRightRadius: moderateScale(30),
    borderTopLeftRadius: moderateScale(30),
    borderWidth: 3,
    borderColor: Colors.navyBlue,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "green",
    // padding: moderateScale(10),
    margin: moderateScale(10),
    flexDirection: "row",
  },
  leaderImage: {
    height: verticalScale(80),
    width: horizontalScale(80),
    borderRadius: 200,
  },
  headerInfo: {
    flex: 1,
    // backgroundColor: "pink",
  },
  titleText: {
    fontWeight: "bold",
    fontSize: moderateScale(20),
    margin: verticalScale(5),
    color: Colors.navyBlue,
  },
  titleValue: {
    fontWeight: "500",
    color: "black",
  },
  cardBody: {
    flex: 1,
    // backgroundColor: "orange",
    borderBottomRightRadius: moderateScale(30),
    padding: moderateScale(10),
    alignItems: "center",
  },
  bodyTitleText: {
    fontWeight: "500",
    fontSize: moderateScale(20),
    marginTop: verticalScale(5),
    color: Colors.navyBlue,
  },
  bodyText: {
    marginTop: verticalScale(5),
    textAlign: "center",
  },
  stack: {
    flexDirection: "row",
  },
});
