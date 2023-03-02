import { useState } from "react";

export default function WeatherForm({onChangeCity}){

    const [city, setCity]= useState('');

    function onChange(e){
        const value= e.target.value;

        if (value !== ''){
            setCity(value)
        }
       
    }

    function handleSubmit(e){
        e.preventDefault();
        //Llamamos al props como si fuera la funcion, cada vez que cambie la ciudad 
        onChangeCity(city);
    }

    return (
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={onChange} /> 
      </form>
    )
}