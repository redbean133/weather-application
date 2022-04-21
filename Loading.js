import React from "react";
import {StyleSheet, View,Text} from "react-native";
import {StatusBar} from "expo-status-bar";

export default function Loading() {
    return (
        <View style={styles.container}>
            <StatusBar style="dark"/>
            <Text style={styles.text}>Getting the Weather...</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 50,
        paddingVertical: 100,
        backgroundColor: "#D3DEDC"
    },
    text:{
        color: "#2c2c2c",
        fontSize: 20
    }
});