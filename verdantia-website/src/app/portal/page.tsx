'use client'

import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from '@/app/firebase/config'
import {useRouter} from "next/navigation";
import {signOut} from "@firebase/auth";
export default function Portal() {

    const [user] = useAuthState(auth)
    const router = useRouter()
    console.log(user == null)
    if (!user){
        router.push('/signIn')
    }
    const handleSignOut = () => {
        signOut(auth);
        console.log('Sign Out')
        router.push('/signIn')
    }
    return (
      <main>
        <h2>Portal Page</h2>
          <button onClick={handleSignOut}>sign out</button>
      </main>
    )
  }