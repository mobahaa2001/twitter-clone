import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const SpacesCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subCont}>
        <View style={styles.liveHeadCont}>
          <View style={styles.liveCont}>
            <Image
              source={require("../assets/me.jpg")}
              style={{
                height: 45,
                width: 45,
                borderRadius: 30,
                marginLeft: 10,
                resizeMode: "cover",
              }}
            />
            <Text style={styles.livetext}>LIVE</Text>
          </View>
          <View style={styles.menuCont}>
            <MaterialCommunityIcons
              name="dots-vertical"
              color="#fff"
              size={20}
            />
          </View>
        </View>
        <View style={styles.titleCont}>
          <Text style={styles.titleText}>This is the title of the Space</Text>
        </View>
        <View>
          <Text style={styles.tagText}>Animation - Nature - Sports</Text>
        </View>
      </View>
    </View>
  );
};

export default SpacesCard;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  subCont: {
    backgroundColor: "rgba(212, 34, 197, 0.9)",
    padding: 15,
  },
  liveHeadCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  liveCont: {
    flexDirection: "row",
    alignItems: "center",
  },
  livetext: {
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 10,
  },
  menuCont: {
    flexDirection: "row",
    alignItems: "center",
  },
  titleCont: {
    marginTop: 7,
    marginBottom: 10,
  },
  titleText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  tagText: {
    color: "#fff",
  },
});
