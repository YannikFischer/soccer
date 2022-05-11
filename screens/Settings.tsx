import { View, Text, StyleSheet } from "react-native";
import React from "react";

import BackButton from "../components/BackButton";

const Settings = (props: {}) => {
  return (
    <View>
      <BackButton />
      <Text>Settings</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Settings;
