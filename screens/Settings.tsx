import { View, Text, Dimensions, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import FunctionButton from "../components/FunctionButton";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

import BackButton from "../components/BackButton";

const Settings = (props: { navigation: any }) => {
  return (
    <View>
      <LinearGradient
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0 }}
        colors={["#8d03a1", "#11157f"]}
        style={styles.background}
      />

      <BackButton />
      <View style={styles.main}>
        <Text style={styles.titles}>Volume</Text>
        <FunctionButton onPress={undefined} title="Placeholder" />
        <Text style={styles.titles}>Goal Reaction</Text>
        <FunctionButton onPress={undefined} title="Placeholder" />
        <FunctionButton onPress={undefined} title="Placeholder" />
        <Text style={styles.titles}>Win Reaction</Text>
        <FunctionButton onPress={undefined} title="Placeholder" />
        <FunctionButton onPress={undefined} title="Placeholder" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    marginTop: 20,
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
});

export default Settings;
