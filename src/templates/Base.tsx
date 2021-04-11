import { Header } from "components/Header";

type BaseTemplateProps = {
  children: React.ReactNode;
};

export const BaseTemplate = ({ children }: BaseTemplateProps) => (
  <>
    <Header />

    <main>{children}</main>
  </>
);
