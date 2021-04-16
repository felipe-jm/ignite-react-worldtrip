import Head from "next/head";
import { ContinentType } from "templates/Continent";

import { HomeTemplate } from "templates/Home";

import { continents } from "services/mirage";

type HomeProps = {
  continents: ContinentType[];
};

const Home = ({ continents }: HomeProps) => (
  <>
    <Head>
      <title>Worldtrip</title>
    </Head>

    <HomeTemplate continents={continents} />
  </>
);

export const getStaticProps = async () => {
  return {
    props: {
      continents,
    },
  };
};

export default Home;
