import React from 'react';
import {Image, ImageBackground, StyleSheet, View} from "react-native";
import createCSSStyleSheet from "react-native-web/dist/exports/StyleSheet/createCSSStyleSheet";

function WelcomeScreen(props) {
    return (
        <ImageBackground
            source={require('../assets/hehuan_mountain.jpg')}
            style={styles.background}
        >
            {/*<View style={styles.loginButton}/>*/}

        </ImageBackground>
    );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    // loginButton: {
    //     width: '100%',
    //     height: 70,
    //     backgroundColor : 'aqua',
    //
    // },
})