import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function AddItem(props) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(1);

  const onChange = (textValue) => setText(textValue);

  return (
    <View>
      <TextInput
        placeholder="Add item..."
        style={styles.input}
        onChangeText={onChange}
      />
      <TouchableOpacity style={styles.btn} onPress={() => 
        props.saveItem(text,amount)}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} /> AddItem
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    marginTop: 5,
    fontSize: 16,
    backgroundColor: "white"
  },
  btn: {
    backgroundColor: "#c2bad8",
    padding: 9,
    margin: 5,
    
  },
  text: {
    color: "#fff",
    fontSize: 23,
    textAlign: "center",
  },
});

export default AddItem;
