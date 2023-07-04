import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect } from "react";
import MailCard from "../Components/MailCard";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { ChatData } from "../mock/DummyData";

const MailScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Messages",
      headerLeft: () => (
        <Image
          source={require("../assets/my.jpg")}
          style={{ height: 45, width: 45, borderRadius: 30, marginLeft: 10 }}
        />
      ),

      headerRight: () => (
        <MaterialIcons
          name="settings"
          color={"#fff"}
          size={25}
          style={{ marginRight: 15 }}
        />
      ),
      headerStyle: {
        backgroundColor: "#000",
        borderBottomWidth: 0,
      },
      headerTitleStyle: {
        color: "#fff",
      },
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {ChatData.map((data) => (
          <MailCard
            prof={data.prof}
            key={data.id}
            id={data.id}
            name={data.name}
            verified={data.verified}
            image={data.image}
            msg={data.msg}
            time={data.time}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default MailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
