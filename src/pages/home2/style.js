import {StyleSheet} from 'react-native';

const corTexto = '#FFF';

export default style = StyleSheet.create({
    containerGeral:{
        backgroundColor:'#22D78E',
    },
    textoStatusMomentoDia:{
        color:corTexto,
        fontSize:20,
        fontFamily:'Roboto-Bold'
    },
    containerTextoIcone:{
        marginTop:10,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20,
    },
    containerTextoDia:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:20
    },
    textoDia:{
        color:'#FFF',
        fontSize:12
    },
    containerTextoMensagem:{
        paddingTop:30,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'red'
    },
    textoMensagemPrincipal:{
        textAlign:'center',
        // marginHorizontal:20,
        fontSize:25,
        color:'#FFF'
    },
    textoHastags:{
        marginTop:5,
        fontSize:12,
        color:'#FFF',
        textAlign:'center'
    }
}) 