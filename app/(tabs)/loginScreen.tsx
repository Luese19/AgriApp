import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'Farmer' | 'Buyer'>('Farmer');

  const handleLogin = () => {
    // Handle login logic here
    console.log(`Logging in as ${role} with email: ${email}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={styles.roleContainer}>
        <TouchableOpacity
          style={[styles.roleButton, role === 'Farmer' && styles.activeRole]}
          onPress={() => setRole('Farmer')}
        >
          <Text style={styles.roleText}>Farmer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.roleButton, role === 'Buyer' && styles.activeRole]}
          onPress={() => setRole('Buyer')}
        >
          <Text style={styles.roleText}>Buyer</Text>
        </TouchableOpacity>
      </View>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: width * 0.05, // 5% of screen width
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: width * 0.06, // 6% of screen width
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: height * 0.03, // 3% of screen height
  },
  input: {
    height: height * 0.07, // 7% of screen height
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: height * 0.02, // 2% of screen height
    paddingHorizontal: width * 0.03, // 3% of screen width
    backgroundColor: '#fff',
  },
  roleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: height * 0.03, // 3% of screen height
  },
  roleButton: {
    padding: width * 0.03, // 3% of screen width
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  activeRole: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
  },
  roleText: {
    color: '#000',
  },
});

export default LoginScreen;
