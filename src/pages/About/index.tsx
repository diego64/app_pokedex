import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';

type RouteParms = {
  pokemonId: number
}

export function About() {
  const route = useRoute();

  const { pokemonId } = route.params as RouteParms;

  return <>
    <Text style={{margin: 100}}> {pokemonId} </Text>
  </>
}