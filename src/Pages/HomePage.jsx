import React, { useEffect } from 'react'
import './HomePage.css'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'

const HomePage = () => {
  useEffect(()=> {
    AOS.init();
  }, [])

  return (
    <section>

    <NavBar />
    <main>

      <div class="header">

        <div class="hero-cont" data-aos="fade-up" data-aos-duration="3000">
          <h4 class="welcome">Welcome To</h4>
          <h1 class="ameen">Al-Ameen Spark</h1>
        </div>

      </div>

      <section class="help-sec">
        <h1 class="help">How can we help you?</h1>
        <p class="help-para">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit delectus recusandae ex. <br />
          Adipisci veritatis quis non enim sunt maxime eum!
        </p>
      </section>

    </main>
     <Footer />
    </section>
  )
}

export default HomePage