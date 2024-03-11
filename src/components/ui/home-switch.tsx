import { View, Switch } from "react-native";
import Switch_ from "./switch";
import { useState } from "react";

export default function HomeSwitch() {
  const [on, setOn] = useState(false);

  const onSwitchChange = () => {
    setOn(!on);
  };

  return (
    <View className="flex-1 justify-center items-center">
      <Switch_ value={on} onChange={onSwitchChange} />
      <Switch value={true} />
    </View>
  );
}
