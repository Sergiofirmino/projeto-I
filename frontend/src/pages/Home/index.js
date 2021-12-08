import React from 'react'

import Logo from '../../assets/img/ecommerce.png'

import './style.css'

export default function Home(){
    return(
        <div className="home-container">
            <section className="titulo-app">
                <h1>Software de Gestão Comercial</h1>
            </section>
            <section className="logo-container">
                <img src={Logo} alt="Ecommerce"/>
            </section>
        </div>
    )
}