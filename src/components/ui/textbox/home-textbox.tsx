import { View, Text } from "react-native";
import TextBox from "./text-box";

export default function HomeTextBox() {
  return (
    <View>
      <TextBox placeholder="Write Something" />
      <TextBox placeholder="Write Something" />
      <Text style={{ fontFamily: "OpenSans", fontSize: 40 }}>Hello Mishti</Text>
    </View>
  );
}
