//la concha de su puta madre

import { collection, getDocs } from "firebase/firestore";
import { baseDatos } from "../firebase/config";

function GET(){
    const collectionAnimales = collection(baseDatos, "animales");
    getDocs(collectionAnimales).then((resp) => {
        resp.docs.map((doc) => {
            return {...doc.data(), id: doc.id} //GRACIAS CARPI CODER
        })
    })
}