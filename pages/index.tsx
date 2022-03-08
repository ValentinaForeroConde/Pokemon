import { Button } from "@nextui-org/react";
import type { NextPage, GetStaticProps } from "next";
import { Layout } from "../components/layouts";
import { pokeApi } from "../api";
import { PokemonResponse, SmallPokemon } from '../interfaces'

interface Props{
  pokemons: SmallPokemon[];
}

const Homepage: NextPage<Props> = ({ pokemons }) => {
  console.log(pokemons)
  return (
    <Layout title="Listado de Pokémons">
      <Button color="gradient">HELLO</Button>
      <ul>
        {
          pokemons.map( ({ id, name }) =>(
            <li key={ id }>
              #{id} - { name }
            </li>
          ))
        }
      </ul>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonResponse>('/pokemon?limit=151');

  const pokemons: SmallPokemon[] = data.results.map((poke, i) =>({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}`
  }))
  return {
    props: {
      pokemons
    },
  };
};

export default Homepage;
