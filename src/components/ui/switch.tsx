import { View, Pressable, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { useState, useRef, useEffect } from "react";

import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type PropTypes = {
  value?: boolean;
  onChange?: () => void;
  disabled?: boolean;
};

export default function Switch({ value, onChange }: PropTypes) {
  console.log("Render called", value);

  const sv = useSharedValue(0);

  const animate = function (value: boolean) {
    if (value) {
      sv.value = withTiming(1);
    } else {
      sv.value = withTiming(0);
    }
  };

  useEffect(() => {
    console.log("Use Effect Called", value);
    animate(value);
  }, [value]);

  const handlePress = () => {
    if (typeof onChange === "function") {
      onChange();
    }
    // if (isOn.current) {
    //   sv.value = withTiming(0);
    //   isOn.current = false;
    // } else {
    //   sv.value = withTiming(1);
    //   isOn.current = true;
    // }
  };

  const BarAnimationStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        sv.value,
        [0, 1],
        ["#585d67", "#225892"]
      ),
    };
  });

  const CircleAnimationStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: sv.value * 16,
        },
      ],

      backgroundColor: interpolateColor(
        sv.value,
        [0, 1],
        ["#eff8ff", "#3399fe"]
      ),
    };
  });

  return (
    <YellowBox>
      <SwitchContainer className="my-9" onPress={handlePress}>
        <Bar style={BarAnimationStyle}>
          <Circle style={[ShoadowStyle, CircleAnimationStyle]}></Circle>
        </Bar>
      </SwitchContainer>
    </YellowBox>
  );
}

function YellowBox({ children }) {
  return (
    <View className="w-48 h-48 lg:bg-red-200 md:rounded-full lg-rounded-md md:bg-amber-300 bg-green-300 rounded-md justify-center items-center">
      {children}
    </View>
  );
}

const SwitchContainer = styled.Pressable``;

// function Bar({ children, style }) {
//   return <BarStyle style={[style]}>{children}</BarStyle>;
// }

// function Circle({ style }) {
//   return <CircleStyle style={[ShoadowStyle, style]}></CircleStyle>;
// }

// const YellowBox = styled(Animated.View)`
//   width: 192px;
//   height: 192px;
//   background-color: yellow;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

const Bar = styled(Animated.View)`
  width: 60px;
  height: 25px;
  background-color: #fda0b0;
  border-radius: 20px;
`;

const Circle = styled(Animated.View)`
  width: 25px;
  height: 25px;
  background-color: gray;
  border-radius: 12.5px;
`;

const ShoadowStyle = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
};
