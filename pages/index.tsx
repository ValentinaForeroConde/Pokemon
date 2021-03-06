import type { NextPage, GetStaticProps } from "next";
import { Card, Grid, Row, Text } from "@nextui-org/react";

import { pokeApi } from "../api";
import { PokemonResponse, SmallPokemon } from '../interfaces';
import { Layout } from "../components/layouts";
import { PokemonCard } from '../components/pokemon'

interface Props{
  pokemons: SmallPokemon[];
}

const Homepage: NextPage<Props> = ({ pokemons }) => {
  console.log(pokemons)
  return (
    <Layout title="Listado de Pokémons">
      <Grid.Container gap={ 2 } justify='flex-start'>
        {
          pokemons.map((pokemon) =>(
           <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))
        }
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonResponse>('/pokemon?limit=151');

  const pokemons: SmallPokemon[] = data.results.map((poke, i) =>({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ i + 1 }.svg`
  }))

  return {
    props: {
      pokemons
    },
  };
};

export default Homepage;
