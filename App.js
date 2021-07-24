import React from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    TouchableOpacity,
    Button,
    Alert,
    Platform,
    StatusBar,
} from 'react-native';
import {ProgressBar} from "react-native-paper";
import {
    useDimensions, useDeviceOrientation
} from '@react-native-community/hooks';

export default function App() {
    console.log("storing change...");
    // console.log(Dimensions.get("screen"));
    // console.log(useDimensions());
    const handlePress = () => console.log("text pressed");
    const handleImgPress = () => console.log('img pressed')
    return (
        <SafeAreaView style={styles.container}>
            <View
                style={{
                    backgroundColor: "orange",
                    width: "100%",
                    height: 70,
                }
                }>

            </View>
            {/*ProgressBar*/}
            <Text>ProgressBar</Text>
            <ProgressBar progress={0.3} style={styles.probarStyle} color={'#febc5f'}/>
            <Text numberOfLines={1} onPress={handlePress}>
                山川壯麗，物產豐隆，炎黃世胄，東亞稱雄。
                毋自暴自棄，毋故步自封，光我民族，促進大同。
                創業維艱，緬懷諸先烈，守成不易，莫徒務近功。
                同心同德，貫徹始終，青天白日滿地紅。
            </Text>

            {/*TouchableOpacity*/}
            <TouchableOpacity onPress={handleImgPress}>
                <Image source={require("./assets/Taiwan.jpg")} style={styles.img}/>
            </TouchableOpacity>

            <Button color="orange" title="click me"
                    onPress={() =>
                        Alert.alert("title", "button press", [
                            {text: "yes", onPress: () => console.log("button_press_yes")},
                            {text: "no", onPress: () => console.log("button_press_no")},
                        ])}/>
        </SafeAreaView>
    );
}


// 樣式
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    probarStyle: {
        width: 162,
        height: 8,
        backgroundColor: "#E0E0E0"
    },
    img: {
        resizeMode: 'center',
    },
});
