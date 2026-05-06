import React from "react";
import { Pressable, PressableProps } from "react-native";
import ThemedText from "./ThemedText";

interface Props extends PressableProps {
  children: string;
  className?: string;
}

const ThemedButton = ({ className, children, ...rest }: Props) => {
  return (
    <Pressable
      {...rest}
      // onPress={onPress} no hace falta declararlo porque estamos usando las PressableProps.
      className={` bg-light-primary dark:bg-dark-primary items-center rounded-xl px-6 py-2 active:opacity-80 ${className}`}
    >
      <ThemedText className="text-white font-medium text-lg">
        {children}
      </ThemedText>
    </Pressable>
  );
};

export default ThemedButton;
