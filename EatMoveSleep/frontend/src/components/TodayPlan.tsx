import React from 'react';
import { View, Text } from 'react-native';
import { useTailwind } from '../tailwind/withContext';

export default function TodayPlan() {
  const tailwind = useTailwind();
  return (
    <View style={tailwind('mt-6')}>
      <Text style={tailwind('text-base font-medium')}>
        Today’s Plan
      </Text>
    </View>
  );
}