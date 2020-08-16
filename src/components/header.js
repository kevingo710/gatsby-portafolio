import React from "react";
import illustration from '../img/undraw_my_app_grf2.svg';
import Form from './contact-form'


export default () =>(
    <header className="bg-gray-300">
    <div className="container mx-auto p-12 max-w-4xl">
        <div className="flex justify-center items-center">
            <div className="flex-1">
            <h1 className="font-bold text-indigo-700 text-5xl"> Hola! Soy KevinGo</h1>
            <p className="text-xl"> Creo aplicaciones web y moviles, en mis tiempos libres juego con Docker y en la nube de Azure</p>
            </div>
            <img src= {illustration} alt="ManAPP" style={{height: "300px"}}></img>
        </div>

        <div>
        <Form />
        </div>
    </div>
 


    </header>
)