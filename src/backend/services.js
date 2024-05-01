import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase.config";

const countryCollection = collection(db, 'country')
const UserDataCollection= collection(db,'userData')
// const que = query(countryCollection, where('flag', '!=', null));

class services {
    getCountries() {
        return getDocs(countryCollection);
    }
    postCountries(data){
        return addDoc(UserDataCollection,data)
    }
    
}

export default new services()