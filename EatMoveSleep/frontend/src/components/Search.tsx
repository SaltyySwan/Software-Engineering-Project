import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';

type Props = {
  style?: StyleProp<ViewStyle>;
  color?: string;
};

export default function Search({ style, color = 'black' }: Props) {
  return (
    <View style={style}>
      {/* Renderuj ikonicu, tekst ili svg */}
    </View>
  );
}