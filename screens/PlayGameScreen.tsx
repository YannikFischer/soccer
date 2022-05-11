import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import InputField from "../components/InputField";
import GameButton from "../components/GameButton";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const PlayGameScreen = (props: { navigation: any }) => {
  return (
    <View style={styles.main}>
      <LinearGradient
        start={{ x: 0, y: 1 }}
        end={{ x: 1.25, y: 0 }}
        colors={["#8d03a1", "#11157f"]}
        style={styles.background}
      />
      <View style={styles.buttonContainer}>
          <GameButton
            onPress={() => props.navigation.navigate("Home")}
            title="Back"
          />
      </View>
      <View style={styles.upperContainer}>
        <Text style={styles.titles}>Team 1</Text>
        <InputField />
        <Text style={styles.titles}>Team 2</Text>
        <InputField />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.titles}>Game Mode</Text>
      </View>
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
  buttonContainer: {
    width: '2%',
    
  },
});

export default PlayGameScreen;
