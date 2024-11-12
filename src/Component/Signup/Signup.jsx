import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// import { GoogleLogin } from '@react-oauth/google';
import { useGoogleLogin } from '@react-oauth/google';
import googleLogo from '../img/googleLogo.webp' 

function Signup() {
  const [email,setEmail]=React.useState('');
  const [password,setPassword]=useState('');
  const [show,setShow]=useState(false)
  const navigate=useNavigate()

  const handleSignup = (e) => {
   
    e.preventdefault();
    console.log(email);
    console.log(password);
    toast.success("Login successfully");
}
const ToggleShowPassword=()=>{
  setShow(!show)
}
const gotoLoginPage=()=>{
 navigate("/Login");
}

const Signup = useGoogleLogin({
  onSuccess: tokenResponse => console.log(tokenResponse),
});
  return (
   <><div>
 {/* <img className='w-full h-[43rem] pn:hidden   ' src="https://www.neilhuffman.com/blogs/2798/wp-content/uploads/2019/12/packing-the-car-for-holiday-trip.jpg" alt="" /> */}
    <form className='absolute bottom-[12rem]  2xl:ml-[60rem] md:ml-[10rem] sm:ml-[7rem] sm:w-[26rem] pn:ml-3 pn:w-[28rem] bg-blue-300 bg-opacity-80 flex justify-center direction-column w-[30rem] mx-[30rem] mt-[6rem] py-[2rem] text-center rounded-2xl text-black ' >
      <div >
        <h1 className="font-semibold  text-4xl">Signup</h1>
        <div className="input-box">
         <div className="my-4"> <input className='w-[25rem] h-9 rounded-md' type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/></div>
         <div > <input className='w-[25rem] h-9 rounded-md' type={show ? 'text': 'password'} onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="password" />
         <button type='button' onClick={ToggleShowPassword}></button></div>
        </div>
        <button className="font-semibold mt-4 bg-blue-500 w-[4rem] h-[2rem] rounded-md" onClick={handleSignup} >Signup</button>
        <div className="font-semibold mt-2">Don't have an account? <button className='text-blue-800 font-semibold text-lg underline underline-offset-1' onClick={gotoLoginPage}>Log in</button></div>
        <div className="font-semibold text-2xl mb-3">Or</div>
        {/* <GoogleLogin 
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/> */}
<div className='flex justify-center items-center ' >
       <button className='bg-white pl-2 flex rounded-md bg-opacity-90 font-semibold w-[12rem] h-[2rem] ' onClick={() => Signup()}>Signup with Google 
       <img className='w-5 h-5 ml-2 mt-1' src={googleLogo} alt="" /></button>
      </div>
      </div>   
    </form>
   </div>
   </>
  )
}

export default Signup