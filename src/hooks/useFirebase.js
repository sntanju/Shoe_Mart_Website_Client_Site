import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Login/firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [users, setUsers] = useState({});
    const [loading, setLoading] = useState(true);

    const auth = getAuth();

    

    useEffect( () => {
        const unsubscribed = onAuthStateChanged(auth, users => {
            if(users) {
                setUsers(users);
            }
            else {
                setUsers({})
            }
            setLoading(false);
        });
        return () => unsubscribed;
    },[]);

    const logOut = () => {
        setLoading(true);
        signOut(auth)
        .then(() => {})
         .finally(() => setLoading(false));
    }

    return {
        users,
        loading,
        logOut
    }
}

export default useFirebase;