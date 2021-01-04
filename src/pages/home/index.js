import React from 'react';
import { View, Text } from 'react-native';
import style from './style';

export default function home() {
 return (
   <View style={style.containerGeral}>
       <Text style={style.textoStatusMomentoDia}>Boa noite!</Text>
   </View>
  );
}