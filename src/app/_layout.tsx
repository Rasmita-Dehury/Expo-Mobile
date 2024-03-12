import "../global.css";
import { Slot } from "expo-router";
import { useFonts } from "expo-font";
import { View } from "react-native";

export default function Layout() {
  const [fontsLoaded, fontError] = useFonts({
    OpenSans: require("../font/OpenSans-Regular.ttf"),
  });
  return <Slot />;
  // return (
  //   <View className="flex-1">
  //     <View className="h-10 bg-slate-400"></View>
  //     <Slot />
  //     <View className="h-10 bg-slate-400"></View>
  //   </View>
  // );
}
