import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Modal,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import Header from "../../components/Header";
import { dummyDataForTeamLead, Strings } from "../../constants";
import styles from "./HomeScreenStyles";
import TeamLeadCard from "../../components/TeamLeadCard";
import images from "../../assets/images";

const HomeScreen = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [problemStatement, setProblemStatement] = useState("");
  const [teamName, setTeamName] = useState("");

  const openRequestToTLModal = () => {
    setDisplayModal(!displayModal);
  };
  console.log(teamName);
  console.log(problemStatement);
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
          <Text style={styles.titleText}>{Strings.teamLeaders}:</Text>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={dummyDataForTeamLead}
            renderItem={({ item }) => <TeamLeadCard data={item} />}
          />
          <View style={styles.teamLeadSection}>
            <Text style={styles.tlText}>
              Got a problem statement and leadership skills?
            </Text>
            <Text style={styles.tlText}>
              Build your vision by pressing the button below
            </Text>
            <TouchableOpacity
              style={styles.teamLeadButton}
              onPress={() => openRequestToTLModal()}
            >
              <Text style={styles.teamLeadButtonText}>
                {Strings.switchToTeamLead}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Modal visible={displayModal} transparent={false} animationType={"slide"}>
        <View style={styles.modalParentContainer}>
          <ImageBackground
            source={images.background}
            resizeMode="stretch"
            imageStyle={{ opacity: 0.75 }}
            style={styles.modalContainer}
          >
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
              }}
              style={styles.logoImage}
              resizeMode={"contain"}
            />
            <View style={styles.modalDetailsContainer}>
              <Text style={styles.modalText}>Team Name:</Text>
              <TextInput
                style={styles.teamNameInputField}
                value={teamName}
                onChangeText={(text) => setTeamName(text)}
              />
              <Text style={styles.modalText}>Problem statement:</Text>
              <TextInput
                style={styles.problemStatementInputField}
                multiline={true}
                value={problemStatement}
                onChangeText={(text) => setProblemStatement(text)}
              />
              <TouchableOpacity
                style={[styles.modalButton, styles.modalButtonSubmit]}
                onPress={() => setDisplayModal(!displayModal)}
              >
                <Text style={styles.modalButtonText}>Submit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.modalButtonCancel]}
                onPress={() => setDisplayModal(!displayModal)}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </Modal>
    </ImageBackground>
  );
};

export default HomeScreen;
