
import React, { useState } from "react";
import { Text, View, TextInput, Pressable } from "react-native";

function Index() {
  const [value, setValue] = useState("");
  const [submitted, setSubmitted] = useState("");

  return (
    <View
      className="bg-red-500"
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
      }}
    >
      <Text className="text-white text-2xl font-bold" style={{ marginBottom: 12 }}>
        Enter text below
      </Text>

      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder="Type something..."
        placeholderTextColor="#ddd"
        style={{
          width: "100%",
          maxWidth: 400,
          backgroundColor: "rgba(255,255,255,0.12)",
          color: "#fff",
          padding: 10,
          borderRadius: 8,
          marginBottom: 12,
        }}
      />

      <Pressable
        onPress={() => {
          setSubmitted(value);
          setValue("");
        }}
        style={{
          backgroundColor: "#fff",
          paddingVertical: 10,
          paddingHorizontal: 16,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "#000" }}>Submit</Text>
      </Pressable>

      {submitted !== "" && (
        <Text style={{ color: "#fff", marginTop: 16 }}>
          Submitted: {submitted}
        </Text>
      )}
    </View>
  );
}

export default Index;
