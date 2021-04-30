import { CardContainer } from "./styles";

type CardProps = {
  text: string;
  // children?: React.ReactNode;
};

export const Card = ({ text }: CardProps) => {
  return <CardContainer>{text}</CardContainer>;
};
