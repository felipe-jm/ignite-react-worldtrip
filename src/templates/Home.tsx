import { CharacteristicsSection } from "components/CharacteristicsSection";
import { HeroSection } from "components/HeroSection";
import { Divider } from "components/Divider";
import { ContinentsSection } from "components/ContinentsSection";

import { BaseTemplate } from "templates/Base";

export const HomeTemplate = () => {
  return (
    <BaseTemplate>
      <HeroSection />

      <CharacteristicsSection />

      <Divider />

      <ContinentsSection />
    </BaseTemplate>
  );
};
