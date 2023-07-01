import { StyleSheet, Text, View, TextInput, Image, Dimensions, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import TrendingCard from '../Components/TrendingCard'
import SearchProfCard from '../Components/SearchProfCard'
import { TrendingData, DummyData } from '../mock/DummyData'

const ScreenWidth = Dimensions.get("window").width

const SearchScreen = ({navigation}) => {
  
  const [user, setUser] = useState([])
  const data = DummyData

  useEffect(() => (
    navigation.setOptions({
      headerTitle: () => (
        <TextInput 
          placeholder='Search Twitter'
          placeholderTextColor={"#807c7c"}
          style={styles.searchText}
          onChangeText={searchUser}
        />
      ),
      headerLeft: () => (
        <Image 
          source={require("../assets/my.jpg")}
          style= {{height: 45, width: 45, borderRadius: 30, marginLeft: 10}}
        />
      ),
      headerRight: () => (
        <MaterialIcons 
          name='settings'
          color={"white"}
          size={25}
          style={styles.settingIcon}
        />
      ),
    })
  ), [])

  const searchUser = (e) => {
    if(e) {
      setUser(data.filter(data => data.id.includes(e)))
    } else {
      setUser([])
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        {user?.map(data => 
        <SearchProfCard key={data.id} prof={data.prof} id={data.id} name={data.name} verified={data.verified} />  
        )}
        {TrendingData.map(data => 
          <TrendingCard key={data.id} topic={data.topic} hashtag={data.hashtag} count={data.count} />
        )}
      </ScrollView>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  searchText: {
    flex: 2,
    backgroundColor: "#262626",
    paddingLeft: 15,
    textAlignVertical: "center",
    height: "100%",
    width: ScreenWidth-115,
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 50,
    color: "#fff",
    borderWidth: 0,
    fontWeight: "400",
  },
  settingIcon: {
    marginRight:15
  },
})