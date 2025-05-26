import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { TailwindProvider } from './tailwind/withContext';
import utilities from '../tailwind.json';

type Props = {
  children: ReactNode;
};

const TailwindWrapper = ({ children }: Props) => {
  return (
    <TailwindProvider>
      <View style={{ flex: 1 }}>{children}</View>
    </TailwindProvider>
  );
};

export default TailwindWrapper;