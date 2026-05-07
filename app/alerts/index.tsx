import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedView from "@/presentation/shared/ThemedView";
import { Alert } from "react-native";

const AlertsScreen = () => {
  const testAlert = () => {
    Alert.alert("Testing title", "My Alert Msg", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "destructive",
      },
      {
        text: "OK",
        onPress: () => console.log("OK Pressed"),
      },
    ]);
  };

  return (
    <ThemedView margin>
      <ThemedText>Testing alerts</ThemedText>
      <ThemedButton onPress={testAlert}>Test alert</ThemedButton>
    </ThemedView>
  );
};
export default AlertsScreen;
