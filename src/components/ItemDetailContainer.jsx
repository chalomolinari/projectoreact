import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import Container from "react-bootstrap/Container";

import data from "../data/productos.json";
import { ItemCount } from "./ItemCount";
import { ItemContext } from "../context/ItemContext";

export const ItemDetailContainer = (props) => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const {addItem} = useContext(ItemContext);

  useEffect(() => {
  const db = getFirestore();

  const refDoc = doc(db, "itemlist", id);

  getDoc(refDoc)
    .then((snapshot) => {
      setItem({ ...snapshot.data(), id: snapshot.id });
    })
    .finally(() => setLoading(false));

  }, [id]);

const onAdd = (quantity) =>  addItem({...item, quantity });



;




  if (loading) return "wait";

  return (
    <Container className="mt-4">
      <h1>{item.title}</h1>
      <h2>{item.categoryId}</h2>

      <img src={item.imageId}/>
      <br />
      <b>${item.price}</b>
      <b>Stock:{item.stock}</b>
      <br />
      <ItemCount stock={item.stock} onAdd={onAdd} />
    </Container>
  );
};
