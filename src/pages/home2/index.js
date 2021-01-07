import React, {useEffect, useState} from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Row, Grid } from "react-native-easy-grid";
import Swiper from 'react-native-swiper';
import Frases from '../../components/frases';
import StatusMensagem from '../../components/time';
import DiaMensagem from '../../components/dias';
import Dados from '../../services'; 
import style from './style';

export default function home() {

  var [MensagemA,setMensagemA] = useState([]);
  var [MensagemB,setMensagemB] = useState([]);
  var [MensagemC,setMensagemC] = useState([]);

  useEffect(()=>{
    function buscarPorData(dados){
      var data = new Date();
      var dia = data.getDate().toString();
      var mes = data.getMonth().toString();
      var dataFinal ='data_'+dia+'_'+mes;
      
      return dados[dataFinal];
    }
   setMensagemA(buscarPorData(Dados).mensagem01);
   setMensagemB(buscarPorData(Dados).mensagem02);
   setMensagemC(buscarPorData(Dados).mensagem03);
  },[])

return (
   <Grid style={style.containerGeral}>
       <Row size={7} style={style.containerTextoIcone}>
          <Text style={style.textoStatusMomentoDia}> <StatusMensagem/> </Text>
          <Icon name="settings-outline" size={30} color="#FFF"/>
       </Row>
       <Row size={5} style={style.containerTextoDia}>
            <Text style={style.textoDia}>Mensagem para o dia <DiaMensagem/> </Text>
       </Row>

       <Row size={73} style={style.containerTextoMensagem}>

        <Swiper
            dot={
              <View style={{ marginTop:100, backgroundColor: 'rgba(255,235,205,.3)', width: 11, height: 11, borderRadius: 7, marginLeft: 7, marginRight: 7 }}/>
            }
            activeDot={
              <View style={{ marginTop:100, backgroundColor: '#FFF', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7 }}/>
            }
            paginationStyle={{
              bottom: 10
            }}
            loop={false}
          >
        
        <View>
          <Frases
            FrasePrincipal={MensagemA.mensagem}
            hashtags={MensagemA.hastags}
            autor={MensagemA.auto}
          />
        </View>

        <View>
          <Frases
            FrasePrincipal={MensagemB.mensagem}
            hashtags={MensagemB.hastags}
            autor={MensagemB.auto}
          />
        </View>

        <View>
        <Frases
            FrasePrincipal={MensagemC.mensagem}
            hashtags={MensagemC.hastags}
            autor={MensagemC.auto}
          />
        </View>

        </Swiper>
       </Row>
       
       <Row size={15} style={{justifyContent:'center'}}></Row>
   </Grid>   
  );
}