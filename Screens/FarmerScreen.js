// screens/FarmerScreen.js
import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet } from "react-native";

export default function FarmerScreen() {
  const [produce, setProduce] = useState("");
  const [quantity, setQuantity] = useState("");
  const [inventory, setInventory] = useState([]);

  const addProduce = () => {
    if (produce && quantity) {
      const newItem = { id: Date.now().toString(), produce, quantity };
      setInventory([...inventory, newItem]);
      setProduce("");
      setQuantity("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Farmer Inventory</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter produce name"
        value={produce}
        onChangeText={setProduce}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter quantity"
        value={quantity}
        onChangeText={setQuantity}
      />
      <Button title="Add Produce" onPress={addProduce} />
      <FlatList
        data={inventory}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.produce} - {item.quantity}
          </Text>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  header: { fontSize: 22, marginBottom: 20, textAlign: "center" },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, marginBottom: 10 },
  item: { marginVertical: 5, fontSize: 16 },
});