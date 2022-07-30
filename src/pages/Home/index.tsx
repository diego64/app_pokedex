import React, { useEffect, useState } from 'react';
import { Card } from '../../components/Card';
import api from '../../services/api';

import * as S from './styles';

type PokemonType = {
  type: {
    name: string;
  };
};

export interface Pokemon {
  name: string;
  url: string;
  id: number;
  types: PokemonType[];
}

export interface Request {
  id: number;
  types: PokemonType[];
}

export function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function getAllPokemons() {
      const respose = await api.get('/pokemon');
      const { results } = respose.data;

      const payloadPokemons = await Promise.all(
        results.map(async (pokemon: Pokemon) => {
          const { id, types }  = await getMoreInfo(pokemon.url)

          return {
            name: pokemon.name,
            id,
            types,
          }
        })
       )
       setPokemons(payloadPokemons);
      }
    getAllPokemons();
  }, []);

  async function getMoreInfo(url: string): Promise<Request> {
    const respose = await api.get(url);
    const {id, types} = respose.data;

    return {
      id, types
    }
  }

  return <S.Container>
      {pokemons.map(item =>
        <Card />  
      )}
    </S.Container>
  }