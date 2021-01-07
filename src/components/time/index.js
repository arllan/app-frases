import React, {useEffect, useState} from 'react';
import { View, Text } from 'react-native';

export default function time() {

    var [data,setData] = useState();

    useEffect(()=>{
        var hora = new Date();
        var TimeHora = hora.getHours().toString();
        var TimeMinuto = hora.getMinutes().toString();
        var TimeResultado = TimeHora ; 
        FasesDoDia(parseInt(TimeResultado+'.'+TimeMinuto));

    },[])

    function FasesDoDia(hora){
        
        if(hora >= 0 && hora <= 4.59){
            setData('Boa madrugada!');
        }else if(hora >=18 && hora <= 23.59){
            setData('Boa noite!');
        }else if(hora >=5 && hora <= 11.59){
            setData('Bom dia!');
        }else if( hora >= 12 && hora <= 17.59){
            setData('Boa tarde!');
        }
    }
 
    return (
        <>
            {data}
        </>
    );
}