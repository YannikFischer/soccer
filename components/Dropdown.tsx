import React from "react";
import { Text, View, StyleSheet, Pressable, Dimensions } from "react-native";
import { Button, Menu, Divider, Provider } from "react-native-paper";
import { Item } from "react-native-paper/lib/typescript/components/List/List";

const windowWidth = Dimensions.get("window").width;

const DropDown = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <View style={styles.main}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}>Show menu</Button>}
          style={styles.item}
        >
          <Menu.Item onPress={() => {}} title="Item 1" />
          <Menu.Item onPress={() => {}} title="Item 2" />
          <Menu.Item onPress={() => {}} title="Item 3" />
        </Menu>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
  },
  item: {
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

export default DropDown;
