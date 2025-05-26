import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function WelcomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      {/* Gornja slika */}
      <Image source={require('../../assets/naslovna.png')} style={styles.image} />

      {/* Naslov */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Your Health, Your Rules.</Text>
        <Text style={styles.subtitle}>
          Track, Improve, and Thrive—All Offline & Secure.
        </Text>
      </View>

      {/* Opis */}
      <Text style={styles.description}>
        Eat, Move, Sleep—track your wellness privately and effortlessly.
      </Text>

      {/* Dugme */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    width: 390,
    height: 522,
    resizeMode: 'cover',
  },
  titleContainer: {
    marginTop: 40,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#192126',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#192126',
    textAlign: 'center',
    marginTop: 10,
  },
  description: {
    fontSize: 15,
    color: '#19212680',
    textAlign: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#22acf1',
    borderRadius: 32,
    paddingVertical: 13,
    paddingHorizontal: 60,
    marginTop: 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
