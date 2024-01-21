import { Container } from './styles';

export function Textarea({ values, ...rest }) {
  return <Container {...rest}>{values}</Container>;
}
