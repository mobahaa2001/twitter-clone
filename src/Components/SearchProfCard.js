import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

const SearchProfCard = ({ id, name, verified, prof }) => {
  return (
    <View style={styles.container}>
        <View style={styles.leftCont}>
            <Image 
                source={{uri: prof}}
                style={{height: 45, width: 45, borderRadius: 30, }}
            />
        </View>
        <View style={styles.rightCont}>
            <View style={styles.topCont}>
                <View style={styles.nameCont}>
                    <Text style={styles.nameText}>{name}</Text>
                    {verified &&
                        <MaterialIcons 
                            name='verified'
                            color={"white"}
                            size={20}
                        />
                    }
                    <Text style={styles.idText}>@{id}</Text>
                </View>
            </View>
        </View>
    </View>
  )
}

export default SearchProfCard

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingBottom: 5,
        borderBottomColor: "#2A2E30",
        borderBottomWidth: 1,
    },
    leftCont: {

    },
    rightCont: {
        flex: 1,
        paddingTop: 6,
        paddingBottom: 5,
        marginLeft: 5,
        flexDirection: "column",
        justifyContent: "center",
    },
    topCont: {
        flex: 1,

    },
    nameCont: {
        flexDirection: "row"
    },
    nameText: {
        color: "#E7E9EA",
        fontWeight: "bold",
        marginRight: 5,
    },
    idText: {
        marginLeft:5,
        color: "#888"
    },
})