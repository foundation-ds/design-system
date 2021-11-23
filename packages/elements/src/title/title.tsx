import { TitleTypes } from "./title.types";
import * as styled from "./title.styles";

export const Title = ({ text }: TitleTypes) => {
  return <styled.Title>{text}</styled.Title>;
};
