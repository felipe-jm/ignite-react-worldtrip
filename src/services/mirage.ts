import { createServer, Model } from "miragejs";

import { ContinentType } from "templates/Continent";

export const continents: ContinentType[] = [
  {
    slug: "north-america",
    title: "América do Norte",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    countries: 23,
    languages: 23,
    imgUrl:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    cities: [
      {
        title: "New York",
        subtitle: "US",
        imgUrl:
          "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        flagUrl:
          "https://www.flaticon.com/svg/vstatic/svg/206/206626.svg?token=exp=1618586784~hmac=ee5e68c3804dcaf5208302f36d571248",
      },
    ],
  },
  {
    slug: "south-america",
    title: "América do Sul",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    countries: 14,
    languages: 23,
    imgUrl:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    cities: [
      {
        title: "Rio de Janeiro",
        subtitle: "Brasil",
        imgUrl:
          "https://images.unsplash.com/photo-1583275479278-7bc72a16c2ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80",
        flagUrl:
          "https://www.flaticon.com/svg/vstatic/svg/3022/3022546.svg?token=exp=1618586807~hmac=bf5e83e085f4df1f031ba184b19d4077",
      },
    ],
  },
  {
    slug: "asia",
    title: "Asia",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    countries: 48,
    languages: 23,
    imgUrl:
      "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    cities: [
      {
        title: "Seoul",
        subtitle: "Coréia do Sul",
        imgUrl:
          "https://images.unsplash.com/photo-1517154421773-0529f29ea451?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        flagUrl:
          "https://www.flaticon.com/svg/vstatic/svg/206/206758.svg?token=exp=1618586833~hmac=a9ba9a99773e9f33d2cdc4dc343d2183",
      },
    ],
  },
  {
    slug: "africa",
    title: "África",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    countries: 54,
    languages: 23,
    imgUrl:
      "https://images.unsplash.com/photo-1484318571209-661cf29a69c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    cities: [
      {
        title: "Cidade do Cabo",
        subtitle: "África do Sul",
        imgUrl:
          "https://images.unsplash.com/photo-1556766736-3ad404a4feaf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        flagUrl:
          "https://www.flaticon.com/svg/vstatic/svg/555/555604.svg?token=exp=1618586862~hmac=837de9973352a2be32dc5083f668f52f",
      },
    ],
  },
  {
    slug: "europe",
    title: "Europa",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    countries: 60,
    languages: 23,
    imgUrl:
      "https://images.unsplash.com/photo-1471874708433-acd480424946?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    cities: [
      {
        title: "Londres",
        subtitle: "Reino Unido",
        imgUrl:
          "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        flagUrl:
          "https://www.flaticon.com/svg/vstatic/svg/330/330425.svg?token=exp=1618586883~hmac=89cb20bcdc1ecf332275c03bf93da457",
      },
    ],
  },
  {
    slug: "oceania",
    title: "Oceania",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    countries: 14,
    languages: 23,
    imgUrl:
      "https://images.unsplash.com/photo-1589330273594-fade1ee91647?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    cities: [
      {
        title: "Sydney",
        subtitle: "Austrália",
        imgUrl:
          "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        flagUrl:
          "https://www.flaticon.com/svg/vstatic/svg/206/206618.svg?token=exp=1618586909~hmac=05dbc501ba1a65691238258ed0fe4047",
      },
    ],
  },
];

export function makeServer({ environment = "test" }) {
  const server = createServer({
    environment,

    models: {
      continent: Model,
    },

    seeds(server) {
      server.db.loadData({
        continents,
      });
    },

    routes() {
      this.namespace = "api";

      this.get("/continents", (schema) => {
        return schema.all("continent");
      });

      this.get("/continents/:slug", (schema, request) => {
        const { slug } = request.params;

        return schema.find("slug", slug);
      });
    },
  });

  return server;
}
