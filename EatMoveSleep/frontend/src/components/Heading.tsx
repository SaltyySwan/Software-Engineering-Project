import React from 'react';
import { Text, View } from 'react-native';
import { useTailwind } from '../tailwind/withContext';

export default function Heading() {
  const tailwind = useTailwind();
  return (
    <View style={tailwind('mt-6 mb-4')}>
      <Text style={tailwind('text-xl font-bold text-[#192126]')}>
        Good Morning 👋
      </Text>
    </View>
  );
}