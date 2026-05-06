import { useRef } from "react";
import { Animated } from "react-native";
import { Easing } from "react-native-reanimated";

export const useAnimation = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(0)).current;

  const fadeIn = ({
    duration = 300,
    toValue = 1,
    useNativeDriver = true,
    easing = Easing.linear,
    callback = () => {},
  }) => {
    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: useNativeDriver,
      easing: easing,
    }).start(callback);
  };

  const fadeOut = ({
    duration = 300,
    toValue = 0,
    useNativeDriver = true,
    easing = Easing.ease,
    callback = () => {},
    // callback = animatedTop.resetAnimation()
  }) => {
    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      easing: easing,
      useNativeDriver: useNativeDriver,
    }).start(callback);
    // animatedTop.setValue(-100)
  };

  const startMovingTopPosition = ({
    initialPosition = -100,
    duration = 700,
    toValue = 0,
    useNativeDriver = true,
    easing = Easing.linear,
    callback = () => {},
    // callback = animatedTop.resetAnimation()
  }) => {
    animatedTop.setValue(initialPosition);

    Animated.timing(animatedTop, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: useNativeDriver,
      easing: easing,
    }).start(callback);
  };

  return {
    animatedTop,
    animatedOpacity,

    // Methods
    fadeIn,
    fadeOut,
    startMovingTopPosition,
  };
};
