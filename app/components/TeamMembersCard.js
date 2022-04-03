import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Colors, horizontalScale, moderateScale, verticalScale } from '../themes'
import { dummyDataForTeamLead } from '../constants'


const TeamMembersCard = (props) => {
  return (
    <View style={styles.container}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
          }}
          style={styles.leaderImage}
          resizeMode={"contain"}
        />
        <View style={styles.cardInfo}>
          <Text style={styles.infoText}>{props.data.name}</Text>
          <Text style={styles.infoText}>{props.data.stack}</Text>
        </View>
    </View>
  )
}

export default TeamMembersCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        marginVertical: verticalScale(30),
        height: verticalScale(200),
        width: horizontalScale(120),
        marginLeft: horizontalScale(30),
        // borderTopLeftRadius: moderateScale(15),
        // borderTopRightRadius: moderateScale(15),
        borderRadius: moderateScale(5),
        borderWidth: 2,
        borderColor: Colors.navyBlue,
        // flexDirection: 'row',
        // justifyContent: 'space-around',
        // alignItems: 'center'
    },
    leaderImage: {
        height: verticalScale(80),
        width: horizontalScale(80),
        borderRadius: 200,
      },
      cardInfo:{
          flex: 1,
          backgroundColor: Colors.navyBlue,
            borderTopLeftRadius: moderateScale(15),
        borderTopRightRadius: moderateScale(15),
        marginTop: verticalScale(10)
      },
      infoText:{
          fontSize: moderateScale(15),
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: '500',
          color: Colors.white
      }
})