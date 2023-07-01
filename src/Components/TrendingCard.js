import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const TrendingCard = ({ topic, count, hashtag }) => {
  return (
    <View style={styles.container}>
        <View style={styles.topCont}>
            <View >
                <Text style={styles.trendText}>{topic}</Text>
            </View>
            <View>
                <MaterialCommunityIcons 
                    name='dots-vertical'
                    color={"#888"}
                    size={20}
                />
            </View>
        </View>
        <View>
            <Text style={styles.hashtagText}>#{hashtag}</Text>
            <Text style={styles.tweetContText}>{count} tweets</Text>
        </View>
    </View>
  )
}

export default TrendingCard

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        paddingLeft: 15,
        paddingRight: 15,
    },
    topCont: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    trendText: {
        color: "#807c7c",
        fontWeight: "700",
    },
    hashtagText: {
        color: "#fff",
        fontWeight: "700",
        marginTop: 3,
        marginBottom: 3,
    },
    tweetContText: {
        color: "#807c7c",
    },
})