import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import data from "../data/productos.json";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";
import img8 from "../assets/8.jpg";

export const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    new Promise((resolve, reject) => setTimeout(resolve(data), 2000))
      .then((response) => {
        if(!id){

          setItems(response);
        }else{
          const filtered =response.filter(i => i.category === id);
          setItems(filtered);
        }
        
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return "wait";
  return (
    <Container className="mt-4 d-flex">
      {items.map((i) => (
        <Card key={i.id} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={eval(i.image)} />
          <Card.Body>
            <Card.Title>{i.nombre}</Card.Title>
            <Card.Text>{i.category}</Card.Text>
            <Card.Text></Card.Text>
            <Link to={`/item/${i.id}`}>
              {" "}
              <Button variant="primary">AÑADIR AL CARRITO</Button>{" "}
            </Link>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};
