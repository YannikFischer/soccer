import { View, Text, StyleSheet } from "react-native";
import React from "react";

import BackButton from "../components/BackButton";

const Statistics = (props: {}) => {
  return (
    <View>
      <BackButton />
      <Text>Statistics</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Statistics;
