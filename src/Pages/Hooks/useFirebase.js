import { useEffect, useState } from "react"
import initializeAuthentication from "../../Firebase/Initialization"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState({})
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const singInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user)
                setUser = (result.user);
            })
            .catch(error => {
                setError(error.massage)
            })
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    };
    useEffect(onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user)
        }
    }), []);
    return {
        user,
        error,
        singInWithGoogle,
        logOut
    }
}
export default useFirebase;