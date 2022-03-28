
import {getRedirectResult} from 'firebase/auth'
import { useEffect } from "react";
import { 
    auth,
    signInWithGooglePopup, 
    createUserDocumentFromAuth,
    signInWithGoogleRedirect
        } from "../utils/firebase/firebase.utils";



const SignIn = ()=>
{
    useEffect(async ()=>{
    const response = await getRedirectResult(auth);
    },[])
    const logGoogleUser = async () =>
    {
        const {user} = await signInWithGooglePopup();
       
        const userDocRef = await createUserDocumentFromAuth(user)
    }
return(
<div>
<h1>Sign In</h1>
<button onClick={logGoogleUser}>
    Sign in with Google popUp
</button>

<button onClick={signInWithGoogleRedirect}>
    Sign in with Google redirect
</button>
</div>)
}

export default SignIn