import React from 'react';
import { View, Text } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>
        Please log in to continue
      </Text>
    </View>
  );
}
