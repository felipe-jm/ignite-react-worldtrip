import api from "services/api";

const Continent = () => <h1>hello world</h1>;

export const getStaticProps = async () => {
  const continent = await api.get("/continent/");

  return {
    props: {},
  };
};

export default Continent;
