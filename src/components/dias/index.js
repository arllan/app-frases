import React, {useEffect, useState} from 'react';
import { View, Text } from 'react-native';

export default function dias() {

    var[dias,setDias] = useState();

    useEffect(()=>{
        const now = new Date(); 
        const dia = now.getDate();
        setDias(dia);
    })

 return (
       <>
        {dias}
       </>
  );
}