import React from 'react';
import { View } from 'react-native';
import { TailwindProvider } from 'tailwind-rn';
import utilities from '../tailwind.json';

const TailwindWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    //<TailwindProvider  utilities={utilities}>
      <View style={{ flex: 1 }}>{children}</View>
  );
};

export default TailwindWrapper;