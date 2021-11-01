import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const [services, setServices] = useState([]);
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    //load data
    useEffect(() => {
        fetch('https://serene-fjord-06859.herokuapp.com/services')

            .then(res => res.json())
            .then(data => setServices(data));
    }, [])


    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth]);

    // handle registration
    const handleLogin = e => {
        e.preventDefault();
    }

    // sign in using google
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
        setIsLoading(true);

        return signInWithPopup(auth, googleProvider)

    }
    // handle log out
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }
    return {
        services,
        user,
        setUser,
        isLoading,
        setIsLoading,
        handleLogin,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;