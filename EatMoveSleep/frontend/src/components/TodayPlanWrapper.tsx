
import React from 'react';
import { View, Text } from 'react-native';
import { useTailwind } from '../tailwind/withContext';

export default function TodayPlanWrapper() {
  const tailwind = useTailwind();
  return (
    <View style={tailwind('mt-4')}>
      <Text style={tailwind('text-sm text-gray-500')}>
        Wrap up your goals here.
      </Text>
    </View>
  );
}