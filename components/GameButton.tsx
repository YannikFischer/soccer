import React from "react";
import { Text, View, StyleSheet, Pressable, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

function GameButton(props: { onPress: any; title: String }) {
  const { onPress, title = "" } = props;
  return (
    <View style={styles.main}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    backgroundColor: "#bcbbbba7",
    opacity: 0.8,
    width: windowWidth * 0.8,
  },
  text: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "bold",
    letterSpacing: 0.5,
    color: "white",
  },
});

export default GameButton;
