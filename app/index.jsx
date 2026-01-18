
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
        Edit app/index.jsx to change this screen
      </Text>

      <TouchableOpacity onPress={() => router.push('/home')}>
        <Text style={{ color: 'white', fontSize: 18 }}>change route</Text>
      </TouchableOpacity>
    </View>
  );
}
