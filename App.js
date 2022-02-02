import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  ImageBackground,
} from "react-native";

import Header from "./components/Header";
import ListItem from "./components/ListItem";
import AddItem from "./components/AddItem";

export default function App() {
  const [items, setItems] = useState([]);
  const [id, setId] = useState(1);
  const [render, setRender] = useState(false);

  const hello = () => {
    console.log("hello");
  };

  const deleteItem = (id) => {
    const foundItem = items.find((item) => item.id == id);

    if (foundItem.amount > 1) {
      foundItem.amount = foundItem.amount - 1;
      setRender(!render);
    } else {
      setItems((prevItems) => {
        return prevItems.filter((item) => item.id != id);
      });
    }
  };

  const saveItem = (text, amount) => {
    hello();

    if (!text) {
      Alert.alert("Error", "Enter name of item", { text: "Ok" });
    } else if (items.find((i) => i.text == text)) {
      const foundItem = items.find((i) => i.text == text);
      foundItem.amount = foundItem.amount + 1;
      setRender(!render);
    } else {
      setId(id + 1);
      setItems((itemList) => {
        return [{ id: id, text: text, amount: amount }, ...itemList];
      });
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/dogBox.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <Header title="Vinden" />
        <AddItem saveItem={saveItem} />
        <FlatList
          data={items}
          renderItem={({ item }) => (
            // item och deleteItem funktionen hamnar i props
            <ListItem item={item} deleteItem={deleteItem} />
          )}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
