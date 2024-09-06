import {useContext, useState} from "react";
import Container from "react-bootstrap/Container";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { ItemContext} from "../context/ItemContext"


const initialValues = {
  phone: "",
  name: "",
  email: "",
};



export const Cart = () => {

const[buyer, setBuyer] = useState(initialValues);



    const { items, removeItem ,reset} = useContext(ItemContext);


    const total = item.reduce((acc, act) => acc + act.price * act.quantity, 0)

    const sendOrder = () =>{
        const order = {
            buyer,
            items,
            total,

        };

        const db = getFirestore();
        const orderCollection = collection(db, "orders");

        addDoc(orderCollection, order). then (({id})=>{
            if(id) {
                alert ("Su orden: " + id + "ha sido completada");
            }
        });
    };


const handleChange = (ev) =>{
    setBuyer((prev) => {
        return {
            ...prev,
            [ev.target.name]: ev.target.value,
        };
    });
};

    return(
        <Container className="mt-4">
        < button onClick={reset}>Vaciar</button>
        {items.map((item)=>{
            return(
                <div key={item.id}>
                <h1>{item.title}</h1>
                <img src={item.imageId}/>
                <p>{item.quantity}</p>
                <p onClick ={() => removeItem(item.id)}>X</p>
                </div>
            );
        })}
        <form>
<div>
    <label>Nombre</label>
    <input value= {buyer.name} name="name" onChange={handleChange}/>
</div>
<div>
    <label>Telefono</label>
    <input value= {buyer.phone} name="phone" onChange={handleChange}/>
</div>
<div>
    <label>Email</label>
    <input value={buyer.email} name="email" onChange={handleChange}/>
</div>
<button type="button" onClick={sendOrder}></button>
        </form>

        </Container>

    );
};