import { View, Text, TextInput, StyleSheet } from "react-native";
import { useState } from "react";
import B from "./b";
import { NameContext } from "./name-context";

export default function A() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleClear = () => {
    setName("");
  };

  return (
    <View className="w-96 h-96 bg-red-600 rounded-md flex justify-center items-center">
      <NameContext.Provider value={{ name, handleClear }}>
        <Text>A</Text>
        <TextInput
          placeholder="Write Your Text"
          style={[styles.textBoxStyle]}
          value={name}
          onChange={handleChange}
        />
        <B />
      </NameContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  textBoxStyle: {
    fontFamily: "OpenSans",
    fontSize: 14,
    backgroundColor: "white",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
});
