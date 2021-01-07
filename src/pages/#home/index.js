import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Col, Row, Grid } from "react-native-easy-grid";
import style from './style';

export default function home() {
 return (
   <Grid style={style.containerGeral}>
       <Row size={7} style={style.containerTextoIcone}>
          <Text style={style.textoStatusMomentoDia}>Boa noite!</Text>
          <Icon name="settings-outline" size={30} color="#FFF"/>
       </Row>
       <Row size={5} style={style.containerTextoDia}>
            <Text style={style.textoDia}>Mensagem para o dia 365</Text>
       </Row>

       <Row size={70} style={style.containerTextoMensagem}>
           <View style={{ marginTop:50}}>
                <Text style={style.textoMensagemPrincipal}>
                    “O mais corajoso dos atos ainda é pensar com a própria cabeça”
                </Text>
                <Text style={style.textoHastags}>
                    #Reflexão  #Amizade  #Felicidade
                </Text>
                <View style={{ flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                    <View style={{width:15,height:0, borderWidth:1}}/>
                    <Text style={{fontSize:17, marginHorizontal:2}}>Coco Chanel</Text>
                    <View style={{width:15,height:0, borderWidth:1}}/>
                </View>
            </View>
            <View style={{width:'100%', flexDirection:'row', justifyContent:'space-between', marginTop:20}}>
                <Icon name="heart-outline" size={50} color="#FFF" style={{marginHorizontal:35}}/>
                <Icon name="share-social-outline" size={50} color="#FFF" style={{marginHorizontal:35}}/>
            </View>
            <View style={{marginTop:10}}>
                <Icon name="ellipsis-horizontal" size={60} color="#FFF" style={{marginHorizontal:35}}/>
            </View>
       </Row>
       
       <Row size={18} style={{justifyContent:'center'}}>
            
       </Row>
   </Grid>   
  );
}