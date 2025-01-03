"use client";
import React, { useEffect, useState } from 'react';
import anime from 'animejs';
import '../assets/css/style.css';

const SplashScreen = ({ finishLoading }: any) => {
    const [isMounted, setIsMounted] = useState(false);
    const animate = () =>{
        const loader = anime.timeline({
            complete: () => finishLoading(),
        })

        loader.add({
            target: '.splash-container',
            delay: 0,
            duration: 3000,
        })

    }

    useEffect(() => {   
        const timeout = setTimeout(() => setIsMounted(true), 1000);
        animate()
        return () => clearTimeout(timeout);
    }, []);

  return (
    <div className="splash-container">
        <div className="box">
            <div className="title">
                <span className="item"></span>
                <h1>Abi Rahmawan<span></span></h1>
            </div>

            <div className="role">
                <div className="item"></div>
                <p>UI Designer & Web Developer</p>
            </div>
        </div>
    </div>
  )
}

export default SplashScreen;