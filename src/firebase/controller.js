//la concha de su puta madre

import { collection, getDocs } from "firebase/firestore";
import { baseDatos } from "../firebase/config";

/*
    Animal {
        docId: string, // firebase!
        nombre: string,
        especie: string,
        raza: string,
        edad: string,
        descripcion: string,
        salud: Array<bool>,
        foto: string,
        createdAt: timestamp,
        modifiedAt: timestamp,
    }
*/
const GET = async () => {
    const collectionAnimales = collection(baseDatos, "animales");
    const resp = await getDocs(collectionAnimales);
    return resp.docs.map((doc) => {
        return {...doc.data(), id: doc.id} //GRACIAS CARPI CODER
    });
}

export { GET };