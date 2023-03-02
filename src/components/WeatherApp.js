import { useState } from "react";
import WeatherForm from "./WeatherForm";

export default function WeatherApp (){

    const [weather, setWeather]=useState(null);

    //Si no especifico nada pongo una ciudad por defecto
    //Hago el pedido a la API
    async function loadInfo(city ='Salta'){
        try{
            const request = await fetch (`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`);

            const json = await request.json();

            console.log(json)

        } catch (error){

        }

    }

    function handleChangeCity(city){
        //cuando cambie la ciudad regreso el valor a nulo para borrar la informacion
        setWeather(null);
        // llamo a otra funcion que la creo arriba
        loadInfo(city);
    }

    return (
        <div>
            <WeatherForm onChangeCity={handleChangeCity}/>

            <div>
                Info
            </div>
        </div>
    )
}