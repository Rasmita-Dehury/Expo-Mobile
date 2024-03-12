import { View, TextInput, StyleSheet } from "react-native";
import { useState } from "react";

type PropTypes = {
  placeholder?: string;
};

export default function TextBox({ placeholder }: PropTypes) {
  const [isFocused, setFocus] = useState(false);

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };

  return (
    <TextInput
      className="border border-slate-400 w-full p-2 rounded-md outline-none my-3"
      placeholderTextColor="#94a3b8"
      placeholder={placeholder}
      style={[
        styles.textBoxStyle,
        { borderColor: isFocused ? "red" : "black" },
      ]}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
}

function TextBoxContainer({ children }) {
  return <View>{children}</View>;
}

const styles = StyleSheet.create({
  textBoxStyle: {
    fontFamily: "OpenSans",
    fontSize: 14,
    padding: 10,
    // margin: 10,
  },
});
