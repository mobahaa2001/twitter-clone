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
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})