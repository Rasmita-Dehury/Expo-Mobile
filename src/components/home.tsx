import { View, Text } from "react-native";
import HomeSwitch from "./ui/switch/home-switch";
import HomeTextBox from "./ui/textbox/home-textbox";
import HomeContext from "./context/home-context";

export default function Home() {
  return (
    <View className="flex-1 justify-center items-center">
      <HomeSwitch />
      <HomeTextBox />
      <HomeContext />
    </View>
  );
}
