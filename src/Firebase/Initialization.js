import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";
const initializeAuthintication = () => {
    initializeApp(firebaseConfig);
}
export default initializeAuthintication;