import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from "react-native";
import {normalize} from "react-native-elements";

function WelcomeScreen(props) {
    return (
        <ImageBackground
            source={require('../assets/hehuan_mountain.jpg')}
            style={styles.background}
        >
            <View style={styles.logoContainer}>
                <Image source={require('../assets/turtle.png')} style={styles.logo}/>
                <Text style={styles.logoFont}> 因為，山就在那裏 </Text>
            </View>

            <View style={styles.loginButton}/>
            <View style={styles.registerButton}/>
        </ImageBackground>
    );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: 'cadetblue',
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: 'darkgray',
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
    },
    logoFont: {
        color: "white",
        fontSize: normalize(36)
    },

})