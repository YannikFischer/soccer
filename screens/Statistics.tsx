import { View, Text, StyleSheet } from "react-native";
import React from "react";

import GameButton from "../components/GameButton";

const Statistics = (props: {}) => {
  return (
    <View>
      <View style={styles.buttonContainer}>
          <GameButton
            onPress={() => props.navigation.navigate("Home")}
            title="Back"
          />
      </View>
      <Text>Statistics</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {},
});

export default Statistics;
