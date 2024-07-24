import Container from "react-bootstrap/Container";

export const ItemListConteiner = (props) => {
  return (
    <Container className="mt-4">
      <h1>{props.greeting}</h1>
    </Container>
  );
};
