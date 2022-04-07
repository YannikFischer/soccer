import { View, Text, StyleSheet, TextInput, Dimensions } from "react-native";
import React from "react";

const windowWidth = Dimensions.get("window").width;

const InputField = (props: {}) => {
  const [teamName, onChangeTeamName] = React.useState("");

  return (
    <View style={styles.inputFieldMain}>
      <TextInput
        style={styles.textInput}
        value={teamName}
        onChangeText={onChangeTeamName}
        placeholder="Enter Teamname..."
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputFieldMain: {
    alignItems: "center",
    marginTop: 15,
  },
  textInput: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    backgroundColor: "#bcbbbba7",
    opacity: 0.8,
    width: windowWidth * 0.8,
    color: "white",
    fontSize: 20,
  },
});

export default InputField;
