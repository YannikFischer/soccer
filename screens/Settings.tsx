import { View, Text, StyleSheet } from "react-native";
import React from "react";

import GameButton from "../components/GameButton";

const Settings = (props: {}) => {
  return (
    <View>
      <View style={styles.buttonContainer}>
          <GameButton
            onPress={() => props.navigation.navigate("Home")}
            title="Back"
          />
      </View>
      <Text>Settings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {},
});

export default Settings;
