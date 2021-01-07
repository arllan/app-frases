import React, {useRef} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Modalize } from 'react-native-modalize';

export default function modalize() {
    const modalizeRef = useRef(null);

    function onOpen(){
        modalizeRef.current?.open();
    }

 return (
   <View style={styles.container}>
       <TouchableOpacity onPress={onOpen}>
        <Text>Olá mundo</Text>
       </TouchableOpacity>

       <Modalize
        ref={modalizeRef}
        snapPoint={180}
        modalHeight={180}
       >
           <View
            style={{
                flex:1,
                height:180,
                flexDirection:'row',
                justifyContent:'center',
                alignItems:'center'
            }}
           >
               <TouchableOpacity style={[styles.botao,{backgroundColor:'#29ae19'}]}>
                   <Text>Editar</Text>
               </TouchableOpacity>
               <TouchableOpacity style={[styles.botao,{backgroundColor:'#ff0000'}]}>
                   <Text>Apagar</Text>
               </TouchableOpacity>
           </View>
 
       </Modalize>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    botao:{
        alignItems:'center',
        justifyContent:'center',
        padding:15,
        borderRadius: 7
    }
})