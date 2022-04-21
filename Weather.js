import React from "react";
import {StyleSheet, Text, View} from "react-native"
import PropTypes from "prop-types";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';
import {StatusBar} from "expo-status-bar";

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning-rainy",
        gradient: ["#373B44", "#4286f4"],
        title: "Today's weather is ThunderStorm"
    },
    Sunny: {
        iconName: "weather-sunny",
        gradient: ["#f05053", "#e1eec3"],
        title: "Today's weather is Sunny"
    },
    Drizzle: {
        iconName: "weather-rainy",
        gradient: ["#bdc3c7", "#2c3e50"],
        title: "Today's weather is Drizzle"
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#4286f4", "#373B44"],
        title: "Today's weather is Rainy"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#E0EAFC", "#CFDEF3"],
        title: "Today's weather is Snowy"
    },
    Haze: {
        iconName: "weather-hazy",
        gradient: ["#77A1D3", "#79CBCA", "#E684AE"],
        title: "Today's weather is Hazy"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#2980B9", "#6DD5FA", "#FFFFFF"],
        title: "Today's weather is so Good"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title: "Today's weather is Cloudy"
    },
    Fog: {
        iconName: "weather-fog",
        gradient: ["#B993D6", "#8CA6DB"],
        title: "Today's weather is Foggy"
    },
    Tornado: {
        iconName: "weather-tornado",
        gradient: ["#1D2B64", "#F8CDDA"],
        title: "Tornado is coming"
    },
    Squall: {
        iconName: "weather-tornado",
        gradient: ["#C9D6FF", "#E2E2E2"],
        title: "Squall"
    },
    Ash: {
        iconName: "weather-tornado",
        gradient: ["#C9D6FF", "#E2E2E2"],
        title: "Ash"
    },
    Dust: {
        iconName: "weather-tornado",
        gradient: ["#C9D6FF", "#E2E2E2"],
        title: "Today's weather is Dusty"
    },
    Sand: {
        iconName: "weather-tornado",
        gradient: ["#C9D6FF", "#E2E2E2"],
        title: "Today's weather is Sandy"
    },
    Smoke: {
        iconName: "weather-tornado",
        gradient: ["#C9D6FF", "#E2E2E2"],
        title: "Smoke"
    },
    Mist: {
        iconName: "weather-tornado",
        gradient: ["#C9D6FF", "#E2E2E2"],
        title: "Mist"
    }

};
export default function Weather({temp, condition, location, humidity, windSpeed}) {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}>
            <StatusBar style="light"/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white"/>
                <Text style={styles.temp}>{location}: {temp}°C</Text>
                <Text style={styles.temp}>Humidity: {humidity}</Text>
                <Text style={styles.temp}>Wind speed: {windSpeed}</Text>
            </View>
            <View style={styles.halfContainer}>
                <View style={{...styles.halfContainer, ...styles.textContainer}}>
                    <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                </View>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm", "Sunny", "Drizzle", "Rain", "Snow", "Haze", "Clear", "Clouds", "Fog", "Tornado"]).isRequired,
    location: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    windSpeed: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 35,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 24
    },
    textContainer: {
        alignItems: "flex-start"
    }
});