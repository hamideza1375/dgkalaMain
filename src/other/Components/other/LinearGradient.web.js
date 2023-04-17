import React from 'react';
import { View } from 'react-native-web';

export default function LinearGradient({children,colors=[], webStart={},style}) {
  return (
    <View style={[{ backgroundImage: `linear-gradient( ${webStart.x}deg, ${colors} ) ` },style]}>
      {children}
    </View>
  );
}
