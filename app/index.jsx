
import { useRouter } from "expo-router";
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

export default function Index() {
  const router = useRouter();

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

      <TouchableOpacity onPress={() => router.push('/testing')}>
        <Text>change route</Text>
      </TouchableOpacity>
    </View>
  );
}
