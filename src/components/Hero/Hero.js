import React from 'react'
import { hero, heroImg, heroContainer } from '../../styles/hero.module.css'
import logoImg from './christ-fellowship-conference-logo.png'


const Hero = ({ hide = false }) => hide
    ? null
    : (
        <div className={hero}>

            <div className={heroContainer}>
                <img className={`w-75 ${heroImg}`} src={logoImg} alt="Christ Fellowship Church Conference" />
                {/* Temporarily removed 2021 logo */}
                {/* <img className={heroImg} src={titleImg} alt="Christ Fellowship Church Conference 2021" />
                <img className={heroImg} src={yearImg} alt="Christ Fellowship Church Conference 2021" /> */}
            </div>

            <div className={heroContainer}>
                <h1 className="font-weight-bold text-uppercase text-light">
                    {/* Date has been removed due to cancelation */}
                    {/* Feb 10-11 • West Palm Beach, FL */}
                </h1>
            </div>
        </div>
    )

export default Hero