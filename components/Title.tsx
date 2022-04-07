import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";

const windowHeight = Dimensions.get("window").height;

const Title = (props: { title: String }) => {
  const { title = "" } = props;
  return (
    <View style={styles.title}>
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    alignItems: "center",
    marginTop: windowHeight * 0.15,
  },
  titleText: {
    fontSize: 50,
    fontWeight: "bold",
    color: "white",
    // fontFamily: "Roboto-Thin",
  },
});

export default Title;
