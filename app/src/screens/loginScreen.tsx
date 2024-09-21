// src/screens/LoginScreen.tsx
import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const LoginScreen = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aqui você pode adicionar lógica de autenticação
    onLogin();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}>
        <Ionicons name="person" size={20} color={Colors.dark.secondaryText} />
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          placeholderTextColor={Colors.dark.secondaryText}
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed" size={20} color={Colors.dark.secondaryText} />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor={Colors.dark.secondaryText}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <Text style={styles.registerText}>
        Ainda não possui uma conta? <Text style={styles.boldText}>Cadastre-se aqui</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: Colors.dark.background,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    color: Colors.dark.primaryText,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.dark.secondaryBackground,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 50,
    marginLeft: 10,
    color: Colors.dark.primaryText,
  },
  button: {
    height: 50,
    borderRadius: 5,
    backgroundColor: Colors.dark.secondaryBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: Colors.dark.primaryText,
    fontWeight: 'bold',
  },
  registerText: {
    textAlign: 'center',
    color: Colors.dark.primaryText,
    marginTop: 15,
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default LoginScreen;
