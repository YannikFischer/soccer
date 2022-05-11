import { StyleSheet, View, Dimensions } from "react-native";
import React from "react";

import Title from "../components/Title";
import GameButton from "../components/GameButton";
import { LinearGradient } from "expo-linear-gradient";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const HomeScreen = (props: { title: String; navigation: any }) => {
  return (
    <View style={styles.main}>
      <LinearGradient
        start={{ x: 0, y: 1 }}
        end={{ x: 1.25, y: 0 }}
        colors={["#8d03a1", "#11157f"]}
        style={styles.background}
      />
      <Title title="Soccer" />
      <View style={styles.Buttons}>
        <View style={styles.buttonContainer}>
          <GameButton
            onPress={() => props.navigation.navigate("PlayGame")}
            title="Play Game"
          />
          <GameButton
            onPress={() => props.navigation.navigate("Statistics")}
            title="Statistics"
          />
          <GameButton
            onPress={() => props.navigation.navigate("Settings")}
            title="Settings"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: windowHeight + 100,
    width: windowWidth,
  },
  Buttons: {
    flex: 1,
    flexDirection: "column",
    marginTop: windowHeight * 0.2,
  },
  buttonContainer: {
    flex: 1,
    marginBottom: windowHeight * 0.15,
  },
});

export default HomeScreen;
