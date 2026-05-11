import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedView from "@/presentation/shared/ThemedView";
import { Link, router } from "expo-router";

const ModalScreen = () => {
  return (
    <ThemedView>
      <Link asChild href="/modal/modal-window" className="mx-4">
        <ThemedText className="my-2" type="h2">
          Abrir modal
        </ThemedText>
      </Link>

      <ThemedButton
        onPress={() => router.push("/modal/modal-window")}
        className="mx-4"
      >
        Abrir modal
      </ThemedButton>
    </ThemedView>
  );
};
export default ModalScreen;
