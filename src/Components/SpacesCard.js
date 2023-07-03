import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const SpacesCard = ({
  title,
  tags,
  pic1,
  pic2,
  pic3,
  hostName,
  hostPic,
  listenCont,
  desc,
  color,
  hostColor,
}) => {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: color, padding: 15 }}>
        <View style={styles.liveHeadCont}>
          <View style={styles.liveCont}>
            <Image
              source={require("../assets/happy.gif")}
              style={{
                height: 20,
                width: 20,
                borderRadius: 20,
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
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <View>
          <Text style={styles.tagText}>{tags}</Text>
        </View>
        <View style={styles.listenCont}>
          <View style={styles.imageCont}>
            <Image
              source={{
                uri: pic1,
              }}
              style={{
                height: 30,
                width: 30,
                borderRadius: 30,
                resizeMode: "cover",
              }}
            />
            <Image
              source={{
                uri: pic2,
              }}
              style={{
                height: 30,
                width: 30,
                borderRadius: 30,
                resizeMode: "cover",
                marginLeft: -10,
              }}
            />
            <Image
              source={{
                uri: pic3,
              }}
              style={{
                height: 30,
                width: 30,
                borderRadius: 30,
                resizeMode: "cover",
                marginLeft: -10,
              }}
            />
          </View>
          <View>
            <Text style={styles.listenText}>{listenCont} listening</Text>
          </View>
        </View>
      </View>
      <View style={{ padding: 15, backgroundColor: hostColor }}>
        <View style={styles.hostCont}>
          <Image
            style={{
              height: 20,
              width: 20,
              borderRadius: 20,
            }}
            source={{
              uri: "https://images.unsplash.com/photo-1481824429379-07aa5e5b0739?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
            }}
          />
          <Text style={styles.hostName}>{hostName}</Text>
          <View style={styles.hostTag}>
            <Text style={styles.hostTagText}>Host</Text>
          </View>
        </View>
        <View style={styles.descCont}>
          <Text style={styles.descText}>{desc}</Text>
        </View>
      </View>
    </View>
  );
};

export default SpacesCard;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    borderRadius: 10,
    overflow: "hidden",
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
  listenCont: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  imageCont: {
    flexDirection: "row",
    marginRight: 15,
  },
  listenText: {
    color: "#fff",
  },
  hostCont: {
    flexDirection: "row",
    marginBottom: 10,
  },
  hostName: {
    color: "#fff",
    fontWeight: "600",
    marginLeft: 10,
  },
  hostTag: {
    flex: 1,
    backgroundColor: "rgba(214, 212, 214, 0.5)",
    maxWidth: 40,
    paddingTop: 1,
    paddingBottom: 1,
    borderRadius: 4,
    marginLeft: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  hostTagText: {
    color: "#fff",
  },
  descCont: {},
  descText: {
    color: "#fff",
  },
});
