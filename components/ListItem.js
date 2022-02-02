import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function ListItem(props) {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>
          id: {props.item.id}{"\n"}item: {props.item.text}{"\n"}amount: {props.item.amount}
        </Text>
        <Icon
          name="remove"
          size={35}
          color="firebrick"
          onPress={() => props.deleteItem(props.item.id)}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  listItemView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listItemText: {
    fontSize: 18,
    justifyContent: "space-between",
  },
});

export default ListItem;
