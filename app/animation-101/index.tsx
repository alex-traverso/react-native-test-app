import { useAnimation } from "@/hooks/useAnimation";
import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedView from "@/presentation/shared/ThemedView";
import { Animated, Easing, View } from "react-native";

const Animation101Screen = () => {
  const {
    animatedOpacity,
    animatedTop,
    fadeIn,
    fadeOut,
    startMovingTopPosition,
  } = useAnimation();

  return (
    <ThemedView margin className="justify-center items-center flex-1">
      <View className="gap-y-2">
        <Animated.View
          className="bg-light-secondary dark:bg-dark-secondary rounded-xl h-36 w-36"
          style={{
            opacity: animatedOpacity,
            transform: [
              {
                translateY: animatedTop,
              },
            ],
          }}
          // style={{ width: 150, height: 150 }}
        />

        <ThemedButton
          onPress={() => {
            fadeIn({});
            startMovingTopPosition({
              initialPosition: -100,
              easing: Easing.bounce,
              duration: 700,
            });
          }}
        >
          Fade In
        </ThemedButton>

        <ThemedButton onPress={() => fadeOut({})}>Fade Out</ThemedButton>
      </View>
    </ThemedView>
  );
};
export default Animation101Screen;
