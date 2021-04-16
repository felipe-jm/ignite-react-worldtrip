import { CharacteristicsSection } from "components/CharacteristicsSection";
import { HeroSection } from "components/HeroSection";
import { Divider } from "components/Divider";
import { ContinentsSection } from "components/ContinentsSection";

import { BaseTemplate } from "templates/Base";

import { ContinentType } from "./Continent";

type HomeTemplateProps = {
  continents: ContinentType[];
};

export const HomeTemplate = ({ continents = [] }: HomeTemplateProps) => (
  <BaseTemplate>
    <HeroSection />

    <CharacteristicsSection />

    <Divider />

    <ContinentsSection continents={continents} />
  </BaseTemplate>
);
