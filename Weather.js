import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#373B44", "#4286f4"],
    title: "Thunderstorm is Comming!",
    subtitle: "The Sound of Thunder makes me feel better",
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"],
    title: "Drizzle",
    subtitle: "Is like rain, be careful not to get wet",
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#00C6FB", "#005BEA"],
    title: "Raining..",
    subtitle: "Watch out for the river",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#7DE2FC", "#B9B6E5"],
    title: "Let it go",
    subtitle: "Do you wanna build a snowman?.. But can we?",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#FF7300", "#F2F253"],
    title: "Clear",
    subtitle: "Sometimes we use 'cls' as a command",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#D7D2CC", "#304352"],
    title: "Clouds",
    subtitle: "What the cloud systems you use?",
  },
  Mist: {
    iconName: "weather-hail",
    gradient: ["#606c88", "#3f4c6b"],
    title: "Mist",
    subtitle: "There is something in the mist !!",
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Dusty",
    subtitle: "Where did dust come from?",
  },
  Haze: {
    iconName: "weather-hail",
    gradient: ["#606c88", "#3f4c6b"],
    title: "Haze",
    subtitle: "Heize - Don't know weather",
  },
};
export default function Weather({ condition, temp }) {
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={
        !!weatherOptions[condition]
          ? weatherOptions[condition].gradient
          : ["#4c669f", "#3b5998"]
      }
      style={styles.container}
    >
      <StatusBar style="auto" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={
            !!weatherOptions[condition]
              ? weatherOptions[condition].iconName
              : "weather-sunset"
          }
          size={96}
          color="white"
        />
        <Text style={styles.temp}>{temp}℃</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          {!!weatherOptions[condition]
            ? weatherOptions[condition].title
            : "So..me.. Weather!"}
        </Text>
        <Text style={styles.subtitle}>
          {!!weatherOptions[condition]
            ? weatherOptions[condition].subtitle
            : "um.. shall we look outside?"}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Clear",
    "Coulds",
    "Haze",
    "Mist",
    "Dust",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  temp: {
    fontSize: 40,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "300",
    marginBottom: 10,
    textAlign: "left",
  },
  subtitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "left",
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 40,
    alignItems: "flex-start",
    justifyContent: "center",
  },
});
