import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginScreen() {
  return (
    <LinearGradient colors={['#667eea', '#764ba2']} style={styles.container}>
      <View style={styles.loginCard}>
        <View style={styles.logoSection}>
          <Image
            source={require('../assets/img/logo.png')}
            style={styles.logo}
          />
          <Text style={styles.title}>Sistema de Gestão de Frota</Text>
          <Text style={styles.subtitle}>SENAI - Santa Catarina</Text>
        </View>

        <View style={styles.inputGroup}>
          <FontAwesome
            name="envelope"
            size={20}
            color="#667eea"
            style={styles.icon}
          />
          <TextInput
            placeholder="E-mail"
            style={styles.input}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputGroup}>
          <FontAwesome
            name="lock"
            size={20}
            color="#667eea"
            style={styles.icon}
          />
          <TextInput placeholder="Senha" style={styles.input} secureTextEntry />
        </View>

        <TouchableOpacity style={styles.loginBtn}>
          <FontAwesome name="sign-in" size={16} color="#fff" />
          <Text style={styles.loginBtnText}> Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.registerLink}>
          Não tem uma conta?{' '}
          <Text style={styles.registerLinkInner}>Cadastre-se aqui</Text>
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 30,
    width: '90%',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  logoSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#e1e5e9',
    borderRadius: 8,
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
  },
  loginBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#667eea',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  loginBtnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  registerLink: {
    marginTop: 15,
    textAlign: 'center',
    color: '#333',
  },
  registerLinkInner: {
    color: '#667eea',
    fontWeight: 'bold',
  },
});
