import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import FunctionButton from "../components/FunctionButton";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const InGameScreen = (props: { navigation: any }) => {
  return (
    <View style={styles.main}>
      <LinearGradient
        start={{ x: 1, y: 1 }}
        end={{ x: 2, y: 0 }}
        colors={["#8d03a1", "#11157f"]}
        style={styles.background}
      />
      <Text style={styles.titles}>Team 1</Text>
      <Text style={styles.points}>10</Text>
      <FunctionButton onPress={undefined} title="Throw Ball" />
      <Text style={styles.time}>01:10</Text>
      <FunctionButton
        onPress={() => props.navigation.navigate("PlayGame")}
        title="Exit Game"
      />
      <Text style={styles.titles}>Team 2</Text>
      <Text style={styles.points}>9</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "space-between",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: windowHeight + 100,
    width: windowWidth,
  },
  titles: {
    fontSize: 40,
    fontWeight: "bold",
    letterSpacing: 0.5,
    color: "white",
    marginTop: windowHeight * 0.05,
    alignSelf: "center",
  },
  points: {
    fontSize: 100,
    fontWeight: "bold",
    letterSpacing: 0.5,
    color: "white",
    alignSelf: "center",
  },
  time: {
    fontSize: 80,
    fontWeight: "bold",
    letterSpacing: 0.5,
    color: "white",
    alignSelf: "center",
  },
});

export default InGameScreen;
