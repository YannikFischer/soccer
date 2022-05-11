import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import InputField from "../components/InputField";
import BackButton from "../components/BackButton";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const PlayGameScreen = (props: { navigation: any }) => {
  return (
    <View style={styles.main}>
      <LinearGradient
        start={{ x: 0.5, y: 1.25 }}
        end={{ x: 2, y: 1 }}
        colors={["#8d03a1", "#11157f"]}
        style={styles.background}
      />

      <BackButton />
      <View style={styles.upperContainer}>
        <Text style={styles.titles}>Team 1</Text>
        <InputField />
        <Text style={styles.titles}>Team 2</Text>
        <InputField />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.titles}>Game Mode</Text>
      </View>
      <GameButton
        onPress={() => props.navigation.navigate("InGame")}
        title="Start Game"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  titles: {
    fontSize: 40,
    fontWeight: "bold",
    letterSpacing: 0.5,
    color: "white",
    marginTop: windowHeight * 0.025,
    alignSelf: "center",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: windowHeight + 100,
    width: windowWidth,
  },
  upperContainer: {
    marginTop: windowHeight * 0.03,
  },
  bottomContainer: {},
});

export default PlayGameScreen;
