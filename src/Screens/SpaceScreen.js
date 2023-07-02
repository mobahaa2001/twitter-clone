import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React, { useEffect } from "react";
import SpacesCard from "../Components/SpacesCard";
import { SpacesData } from "../mock/DummyData";

const SpaceScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Spaces",
      headerLeft: () => (
        <Image
          style={{ height: 45, width: 45, borderRadius: 30, marginLeft: 10 }}
          source={require("../assets/my.jpg")}
        />
      ),
      headerTitleStyle: {
        color: "#fff",
        fontWight: "bold",
      },
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.subCont}>
        <View style={styles.liveCont}>
          <View style={styles.liveTextCont}>
            <Text style={styles.liveText}>Heppening Now</Text>
            <Text style={styles.subText}>Spaces going on right now</Text>
          </View>
          <View style={styles.spaceCont}>
            <SpacesCard />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SpaceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 15,
  },
  subCont: {},
  liveCont: {},
  liveTextCont: {},
  liveText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  subText: {
    color: "#fff",
    fontSize: 14,
    marginTop: 4,
    fontWeight: "700",
  },
  spaceCont: {},
});
