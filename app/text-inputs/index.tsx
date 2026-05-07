import ThemedCard from "@/presentation/shared/ThemedCard";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedTextInput from "@/presentation/shared/ThemedTextInput";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";

const isIos = Platform.OS === "ios";

const TextInputsScreen = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  return (
    <KeyboardAvoidingView behavior={isIos ? "height" : undefined}>
      <ScrollView>
        <ThemedView margin>
          {/* <TextInput
        placeholder="Nombre Completo"
        autoCapitalize={"words"}
        autoCorrect={false}
        // keyboardType="" => Para definir que tipo de teclado mostrar, email, numeros, default, etc.
        onChangeText={(text) => setForm({ ...form, name: text })}
      /> */}

          <ThemedTextInput
            placeholder="Nombre completo"
            autoCapitalize={"words"}
            autoCorrect={false}
            keyboardType="default"
            onChangeText={(text) => setForm({ ...form, name: text })}
          />
          <ThemedTextInput
            placeholder="Correo electrónico"
            autoCorrect={false}
            keyboardType="email-address"
            onChangeText={(text) => setForm({ ...form, email: text })}
          />
          <ThemedTextInput
            placeholder="Número de teléfono"
            autoCorrect={false}
            keyboardType="phone-pad"
            onChangeText={(text) => setForm({ ...form, phone: text })}
          />

          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>

          <ThemedCard
            style={{
              marginBottom: isIos ? 100 : 10,
            }}
          >
            <ThemedTextInput
              placeholder="Número de teléfono"
              autoCorrect={false}
              keyboardType="phone-pad"
              onChangeText={(text) => setForm({ ...form, phone: text })}
            />
          </ThemedCard>
        </ThemedView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
