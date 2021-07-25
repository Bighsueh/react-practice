import React from 'react';
import {Image, Platform, SafeAreaView, StyleSheet, Text, View} from "react-native";
import {normalize} from "react-native-elements";
import {StatusBar} from "expo-status-bar";
import colors from "../config/colors.js"

function ViewImageScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
            <Image source={require('../assets/hehuan_mountain_east_peak.jpg')}
                   style={styles.image}/>
        </SafeAreaView>

    );
}

export default ViewImageScreen;

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    }, container: {
        backgroundColor: "black",
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        // justifyContent: 'center',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    }, closeIcon: {
        width: 50,
        height: 50,
        position: "absolute",
        backgroundColor: "#fc5c65",
        flex: 1,
        top: 50,
        left: 30,
    }, deleteIcon: {
        width: 50,
        height: 50,
        position: "absolute",
        backgroundColor: "#4edcd4",
        flex: 1,
        top: 40,
        right: 30,
    }, containerFont: {
        color: "white",
        fontSize: 12,
    }
})