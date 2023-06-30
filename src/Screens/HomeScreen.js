import { StyleSheet, ScrollView, Text, View, Image } from 'react-native'
import React, {useEffect} from 'react'
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import TwitterCard from '../Components/TwitterCard';
import { DummyData } from '../mock/DummyData';

const HomeScreen = ({navigation}) => {
    useEffect(() => {
        navigation.setOptions({
            headerTitleAlign: "center",
            headerLeft: () => (
                
                <Image 
                    style={{height: 45, width: 45, borderRadius: 30, marginLeft: 15}}
                    source={require('../assets/my.jpg')}
                />
            ),
            headerTitle: () => (
                <FontAwesome5 name='twitter' size={25} color={"#00acee"} />
            )
        })
    })

  return (
    <View style={styles.container}>
      <ScrollView>
        {DummyData.map(data => 
          <TwitterCard 
            key={data.id}
            prof={data.prof}
            id={data.id}
            name={data.name}
            verified={data.verified}
            image={data.image}
            tweet={data.tweet}
            rt={data.rt}
            time={data.time}
            like={data.like}
            reply={data.reply}
          />
        )}
      </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000"
  }
})