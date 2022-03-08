import { Button } from "@nextui-org/react";
import type { NextPage, GetStaticProps } from "next";
import { Layout } from "../components/layouts";

const Homepage: NextPage = (props) => {
  return (
    <Layout title="Listado de Pokémons">
      <Button color="gradient">
        HELLO
      </Button>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {

  return {
    props: {
      
    }
  }
}

export default Homepage;
