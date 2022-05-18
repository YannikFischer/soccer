import React from "react";
import { Text, View, StyleSheet, Pressable, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

function BackButton() {
  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      <Pressable onPress={() => navigation.goBack()}>
        <Text style={styles.text}>Back</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginLeft: "3%",
    marginTop: "9%",
  },
  text: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "bold",
    letterSpacing: 0.5,
    color: "white",
  },
});

export default BackButton;
