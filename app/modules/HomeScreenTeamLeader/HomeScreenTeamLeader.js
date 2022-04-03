import { StyleSheet, Text, View, ImageBackground, ScrollView, FlatList } from "react-native";
import React from "react";
import images from "../../assets/images";
import Header from "../../components/Header";
import { Colors, moderateScale } from "../../themes";
import { dummyDataForTeamLead } from "../../constants";
import TeamMembersCard from "../../components/TeamMembersCard";
import InviteTeamMembersCard from "../../components/InviteTeamMembersCard";


const HomeScreenTeamLeader = () => {
  const data = true
  const title = data ? 'Your team:' : 'You dont have any team members. Invite hackers:'
  return (
    <ImageBackground
    source={images.background}
    resizeMode="stretch"
    style={{ flex: 1 }}
    imageStyle={{ opacity: 0.2 }}
  >
      <ScrollView bounces={true}>
        <Header />
        <View style={styles.container}>
          <Text style={styles.titleText}>{title}</Text>
          <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={dummyDataForTeamLead}
                  renderItem={({ item }) => <TeamMembersCard data={item} />}
          />
          <Text style={styles.titleText}>Invite hackers:</Text>
          <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={dummyDataForTeamLead}
                  renderItem={({ item }) => <TeamMembersCard data={item} />}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default HomeScreenTeamLeader;

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
});
