import { useThemeColor } from "@/hooks/use-theme-color";
import React from "react";
import { Platform, Pressable, Switch, View } from "react-native";
import ThemedText from "./ThemedText";

interface Props {
  text?: string;
  value: boolean;
  className?: string;
  onValueChange: (value: boolean) => void;
}

const isAndroid = Platform.OS === "android";
const isIos = Platform.OS === "ios";

const ThemedSwitch = ({ text, onValueChange, value, className }: Props) => {
  const switchActiveColor = useThemeColor({}, "primary");

  return (
    <Pressable
      className={`px-3 flex flex-row items-center justify-between active:opacity-80 ${className}`}
      onPress={() => onValueChange(!value)}
    >
      {text ? <ThemedText type="h2">{text}</ThemedText> : <View />}
      <Switch
        value={value}
        onValueChange={onValueChange}
        thumbColor={isAndroid ? switchActiveColor : ""}
        trackColor={{
          false: "grey",
          true: switchActiveColor,
        }}
      />
      ;
    </Pressable>
  );
};

export default ThemedSwitch;
