import React from 'react';
import { View, Text } from 'react-native';
import { useTailwind } from '../tailwind/withContext';

export default function YesterdaySRecap() {
  const tailwind = useTailwind();
  return (
    <View style={tailwind('mt-4')}>
      <Text style={tailwind('text-sm font-light text-gray-600')}>
        Yesterday’s summary goes here.
      </Text>
    </View>
  );
}