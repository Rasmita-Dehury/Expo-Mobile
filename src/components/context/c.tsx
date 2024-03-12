import { Text, View } from "react-native";
import { useContext } from "react";
import { NameContext } from "./name-context";

export default function C() {
  const { name, handleClear } = useContext(NameContext);

  const clear = () => {
    handleClear();
  };

  return (
    <View className="w-full h-4/6  bg-pink-300 flex justify-center items-center">
      <Text>C</Text>
      <Text>{name}</Text>
      <button onClick={clear}>Clear</button>
    </View>
  );
}
