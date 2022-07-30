import React from 'react';
import AnimatedLottieView from 'lottie-react-native';
import pokemonAnimation from './pokemon.json';

import { Button } from '../../components/Button';

import * as S from './styles';

export function Welcome() {
  return <S.Container>
      <S.Content>
        <S.WrapperAnimation>
          <S.WrapperImage>
            <AnimatedLottieView style={{width: 200}} autoPlay source={pokemonAnimation} loop/>
          </S.WrapperImage>
        </S.WrapperAnimation>

        <S.Title>Bem Vindo(a)</S.Title>
        <S.SubTitle>Encontre seu Pokémon em um só lugar</S.SubTitle>
      </S.Content>
      <S.Footer>
        <Button title='Iniciar'/>
      </S.Footer>
    </S.Container>
}