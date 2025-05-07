// screens/HomeScreen.js
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>AgriConnect</Text>
      <Button
        title="Farmer Inventory"
        onPress={() => navigation.navigate("Farmer")}
      />
      <Button
        title="Consumer Orders"
        onPress={() => navigation.navigate("Consumer")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
});