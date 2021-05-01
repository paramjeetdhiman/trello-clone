import { CardContainer } from "./styles";

type CardProps = {
  text: string;
  id: string;
  // children?: React.ReactNode;
};

export const Card = ({ text }: CardProps) => {
  return <CardContainer>{text}</CardContainer>;
};
