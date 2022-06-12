import React, { Component } from "react";
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    TouchableOpacity,
    ImageBackground,
    Image
} from "react-native";

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <ImageBackground source={require('../assets/bg_image.png')} style= {styles.backgroundImage}/>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>ISS Tracker App</Text>
                    </View>
                    <TouchableOpacity style={styles.routeCard} onPress={()=>this.props.navigation.navigate('IssLocation')}>
                        <Text style={styles.routeText}>ISS Location</Text>
                        <Image source={require('../assets/iss_icon.png')} style= {styles.iconimage}>
                         </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.routeCard}>
                        <Text style={styles.routeText}>Meteors</Text>
                        <Image source={require('../assets/meteor_icon.png')} style= {styles.iconimage}> 
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.routeCard}>
                        <Text style={styles.routeText}>Updates</Text>
                        <Image source={require('../assets/roket_icon.png')} style= {styles.iconimage}>
                        </Image>
                    </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
    },
    routeCard: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: 'white'
    },
    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        marginTop: 75,
        paddingLeft: 30
    },
    backgroundImage:{
        flex:1,
        resizemode:'cover',
    },
    iconimage:{
        position:'absolute',
        height:200,
        width:200,
        resizeMode:"contian",
        right:20,
        top:-80
    }
});
