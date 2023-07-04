import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const NatificationCard = ({ title, type, desc, color, pic }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftCont}>
        <MaterialCommunityIcons name={type} size={25} color={color} />
      </View>

      <View style={styles.rightCont}>
        <View style={styles.picCont}>
          {pic?.map((data) => (
            <Image
              source={{ uri: data }}
              style={{ height: 40, width: 40, borderRadius: 40 }}
            />
          ))}
        </View>
        <View style={styles.titleCont}>
          <Text style={styles.text}>{title}</Text>
        </View>
        <View>
          <Text style={styles.descText}>{desc}</Text>
        </View>
      </View>
    </View>
  );
};

export default NatificationCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingRight: 20,
    paddingBottom: 10,
    paddingTop: 10,
    borderBottomColor: "#333",
    borderBottomWidth: 1,
  },
  leftCont: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: 15,
    flex: 1,
  },
  rightCont: {
    flex: 4,
  },
  picCont: {
    marginBottom: 10,
    flexDirection: "row",
  },
  titleCont: {
    marginBottom: 10,
  },
  text: {
    color: "#fff",
  },
  descText: {
    color: "#888",
  },
});
