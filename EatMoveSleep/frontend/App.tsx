import React from 'react';
import { StatusBar } from 'react-native';
import TailwindWrapper from './src/TailwindWrapper';
import HomeScreen from './src/screens/HomeScreen'; // prilagodi ako treba

export default function App() {
  return (
    <TailwindWrapper>
      <StatusBar barStyle="dark-content" backgroundColor="#f6f6f9" />
      <HomeScreen />
    </TailwindWrapper>
  );
}