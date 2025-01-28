import React, { createContext, useEffect, useState } from 'react';
import auth from '../../../firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
export  const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
    const [user,setUser]= useState()
    const [loading,setLoading] = useState(true)

    const createUser = (email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password)
    }
    const logIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setLoading(false)
            setUser(currentUser)
            console.log(currentUser);
            
        })
        return ()=>{
            console.log(unSubscribe);
            
        }
    },[])

    const authInfo = {createUser,logIn,logOut,user,loading}
    return (
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;