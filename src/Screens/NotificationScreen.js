import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React, { useEffect } from "react";
import NotificationCard from "../Components/NatificationCard";
import { NotificationData } from "../mock/DummyData";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const NotificationScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Notifications",
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
        {NotificationData.map((data) => (
          <NotificationCard
            key={data.id}
            type={data.type}
            title={data.title}
            desc={data.desc}
            color={data.color}
            pic={data.pic}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
