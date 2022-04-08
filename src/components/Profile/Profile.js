import React, { useState } from 'react';
import GoogleIcon from '../../icons/google.png'
import GitHubIcon from '../../icons/github.png'
import FacebookIcon from '../../icons/facebook.png'
import ChartLine from '../ChartLine/ChartLine';
import app from '../../firebase.init';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const Profile = ({ crypto }) => {
    const [user, setUser] = useState({})
    const [registered, setRegistered] = useState(false);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState('')


    const handleName = e => {
        setName(e.target.value)
    }
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePass = e => {
        setPass(e.target.value)
    }

    // email pass sign in or sign up
    const handleSubmit = e => {
        e.preventDefault();
        setError('')
        if (registered) {
            signInWithEmailAndPassword(auth, email, pass)
                .then(result => {
                    const user = result.user;
                    setUser(user)
                    console.log(user)
                })
                .catch(error => {
                    console.error(error)
                    setError(error.message)
                })
        }
        else {
            createUserWithEmailAndPassword(auth, email, pass)
                .then(result => {
                    const user = result.user;
                    setUser(user)
                    console.log(user)
                    setUserName()
                    emailVarification()
                })
                .catch(error => {
                    console.error(error)
                    setError(error.message)
                })
        }
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(() => {
                console.log('updating name')
            })
    }
    const emailVarification = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                console.log('verification email sent')
            })
    }
    const handleForgetPass = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                console.log('password reset link sent')
            })
    }


    // google, github or facebook sign in
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user
                setUser(user)
            })
            .catch(error => {
                alert('Your are not Signed in. Pleaser provide valid information.')
            })
    }
    const handleGitHubSignIn = () => {
        signInWithPopup(auth, gitProvider)
            .then(result => {
                const user = result.user
                setUser(user)
            })
            .catch(error => {
                alert('Your are not Signed in. Pleaser provide valid information.')
            })
    }
    const handleFacebookSignIn = () => {
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                const user = result.user
                setUser(user)
            })
            .catch(error => {
                console.error(error)
                alert('Your are not Signed in. Pleaser provide valid information.')
            })
    }


    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch((error) => {
                setUser({})
            });
    }


    return (
        <div>
            {
                !user.uid ?
                    <div>
                        <div className='flex justify-center items-center h-[90vh] px-[160px]'>
                            <section className='grid grid-cols-2 h-[70vh]'>
                                {/* left side of card */}
                                <div className='bg-rose-700 rounded-l-xl p-10 flex items-center'>
                                    <article>
                                        <h2 className='text-5xl text-right font-semibold'>Get exclusive excess</h2>
                                        <h2 className='text-5xl text-right font-semibold my-3'>to Coin<span className='text-slate-900 font-bold'>Kinbo</span></h2>
                                        <p className='text-right pl-8 mt-8'><small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum aspernatur tempora eligendi? Vel quibusdam delectus, magni harum ducimus sapiente deserunt best service in the world!</small></p>
                                    </article>
                                </div>
                                {/* right side of card */}
                                <div className='bg-white text-black rounded-r-xl p-6'>
                                    <div className='flex justify-end items-center gap-4 font'>
                                        <p className='font-semibold opacity-50'><small>{!registered ? "Already member?" : "Don't have account?"}</small></p>
                                        <button onClick={() => setRegistered(!registered)} className='border border-green-500 text-green-500 font-semibold rounded-md py-1 px-2 hover:bg-green-500 hover:text-white duration-300 ease-in'><small>{!registered ? "Login" : "Create Profile"}</small></button>
                                    </div>
                                    <div className='mt-20'>
                                        <form onSubmit={handleSubmit} className='flex flex-col items-center'>
                                            {
                                                registered ||
                                                <input onBlur={handleName} className='w-[400px] border-b-2 py-2' type="text" name="fullName" id="fullName" placeholder='Full name' required />
                                            }
                                            <input onBlur={handleEmail} className='w-[400px] border-b-2 py-2 my-3' type="email" name="email" id="email" placeholder='Email' required />
                                            <input onBlur={handlePass} className='w-[400px] border-b-2 py-2' type="password" name="password" id="password" placeholder='Password' required />
                                            <p className='text-red-500'><small>{error}</small></p>
                                            {/* login or register button */}
                                            <input className='border bg-green-500 text-white font-semibold rounded-md py-2 mt-4 px-20 hover:cursor-pointer' type="submit" value={registered ? "Login" : "Register"} />
                                        </form>
                                        {
                                            registered &&
                                            <p onClick={handleForgetPass} className='my-2 font-medium opacity-50 hover:cursor-pointer hover:opacity-70'><small>Forget Password?</small></p>
                                        }
                                    </div>
                                    <div>
                                        <div className='my-5'>
                                            <button onClick={handleGoogleSignIn}><img className='h-8 w-8' src={GoogleIcon} alt="" /></button>
                                            <button onClick={handleGitHubSignIn}><img className='h-9 w-9 mx-5' src={GitHubIcon} alt="" /></button>
                                            <button onClick={handleFacebookSignIn}><img className='h-9 w-9' src={FacebookIcon} alt="" /></button>
                                        </div>
                                    </div>
                                </div>
                            </section >
                        </div >
                    </div> :
                    // if found user
                    <div className='flex justify-center items-center px-[150px] mt-6 relative'>
                        <section>
                            <button onClick={handleSignOut} className='border border-rose-500 text-rose-500 font-semibold rounded-md py-1 px-6 hover:bg-rose-500 hover:text-white duration-300 ease-in absolute right-[100px]'>Log out</button>
                            <h2 className='text-4xl font-semibold'>Hello : <span className='font-bold'>{user.displayName}</span></h2>
                            <p className='text-xl my-4'>Your Total Portfolio</p>
                            <ChartLine crypto={crypto}></ChartLine>
                        </section>
                    </div>
            }
        </div>
    );
    // <ChartLine crypto={crypto}></ChartLine>
};


export default Profile;
