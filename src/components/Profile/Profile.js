import React, { useState } from 'react';
import GoogleIcon from '../../icons/google.png'
import GitHubIcon from '../../icons/github.png'
import FacebookIcon from '../../icons/facebook.png'
import ChartLine from '../ChartLine/ChartLine';
import app from '../../firebase.init';
import { getAuth, GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();


const Profile = ({ crypto }) => {

    const [user, setUser] = useState({})

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
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch((error) => {
                setUser({})
            });
    }

    const handleAlert = () => {
        alert("This option is currently unavailable in your region. You can sign in via 'Google' or 'GitHub'")
    }

    return (
        <div>
            {
                !user.uid ?
                    <div>
                        <div className='flex justify-center items-center h-[90vh] px-[150px]'>
                            <section className='grid grid-cols-2 h-[70vh]'>
                                <div className='bg-rose-500 rounded-l-xl bg-opacity-70 p-10 flex items-center'>
                                    <article>
                                        <h2 className='text-5xl text-right font-semibold'>Get exclusive excess</h2>
                                        <h2 className='text-5xl text-right font-semibold my-3'>to CoinKinbo</h2>
                                        <p className='text-right pl-10 mt-8'><small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum aspernatur tempora eligendi? Vel quibusdam delectus, magni harum ducimus sapiente deserunt best service in the world!</small></p>
                                    </article>
                                </div>
                                <div className='bg-white text-black rounded-r-xl p-6'>
                                    <div className='flex justify-end items-center gap-4 font'>
                                        <p className='font-semibold opacity-50'><small>Don't have account?</small></p>
                                        <button onClick={handleAlert} className='border border-green-500 text-green-500 font-semibold rounded-md py-1 px-2 hover:bg-green-500 hover:text-white duration-300 ease-in'><small>Create Profile</small></button>
                                    </div>
                                    <div className='mt-20'>
                                        <div className='flex flex-col items-center'>
                                            <input className='w-[400px] border-b-2 py-2' type="email" name="email" id="email" placeholder='Email' />
                                            <input className='w-[400px] border-b-2 py-2 my-3' type="password" name="password" id="password" placeholder='Password' />
                                        </div>
                                        <button className='border bg-green-500 text-white font-semibold rounded-md py-2 mt-4 px-20'>Login</button>
                                        <p className='my-2 font-medium opacity-50'><small>Forget Password?</small></p>
                                        <div className='my-5'>
                                            <button onClick={handleGoogleSignIn}><img className='h-9 w-9' src={GoogleIcon} alt="" /></button>
                                            <button onClick={handleGitHubSignIn}><img className='h-9 w-9 mx-5' src={GitHubIcon} alt="" /></button>
                                            <button onClick={handleAlert}><img className='h-9 w-9' src={FacebookIcon} alt="" /></button>
                                        </div>
                                    </div>
                                </div>
                            </section >
                        </div >
                    </div> :
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
