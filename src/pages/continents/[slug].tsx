import Head from "next/head";

import { GetStaticPaths, GetStaticProps } from "next";

import { continents } from "services/mirage";

import { ContinentTemplate, ContinentType } from "templates/Continent";

type ContinentProps = {
  continent: ContinentType;
};

const Continent = ({ continent }: ContinentProps) => (
  <>
    <Head>
      <title>Worldtrip - {continent.title}</title>
    </Head>

    <ContinentTemplate continent={continent} />
  </>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = continents.map((continent) => ({
    params: { slug: continent.slug },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const continent = continents.find((cont) => cont.slug === slug);

  return {
    props: {
      continent,
    },
  };
};

export default Continent;
