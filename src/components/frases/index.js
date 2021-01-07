import React from 'react';
import { View, Text, Alert, Share, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import style from './style';

export default function frases(props) {

    var texto = props?.FrasePrincipal +'   '+ props?.hashtags +'   '+ props?.autor;

    async function Compatilhamento(){
        try {
            const result = await Share.share({
                message: texto,
              });
            if (result.action === Share.sharedAction) {
            if (result.activityType) {
                // shared with activity type of result.activityType
            } else {
                // shared
            }
            } else if (result.action === Share.dismissedAction) {
            // dismissed
            }
        } catch (error) {
            alert('Erro: ' + error.message);
        }
    }

    function Preferidos(){
        Alert.alert(
            "Alert Title",
            "My Alert Msg",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
          );
    }

 return (
    <View style={{height:'90%', flexDirection:'column',justifyContent:'flex-end'}}>
        <View></View>
        
        <View>
            <View>
                <Text style={style.textoMensagemPrincipal}>
                    “{props.FrasePrincipal}”
                </Text>
                <Text style={style.textoHastags}>
                    {props.hashtags}
                </Text>
                <View style={{ flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                    <View style={{width:15,height:0, borderWidth:1}}/>
                    <Text style={{fontSize:17, marginHorizontal:2, fontFamily:'Montserrat-Regular'}}>{props.autor}</Text>
                    <View style={{width:15,height:0, borderWidth:1}}/>
                </View>
            </View>
        </View>
        
        <View>
            <View style={{width:'100%', flexDirection:'row', justifyContent:'space-between', marginTop:20}}>
                <TouchableOpacity onPress={Preferidos}>
                    <Icon name="heart-outline" size={50} color="#FFF" style={{marginHorizontal:20}}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={Compatilhamento}>
                    <Icon name="share-social-outline" size={50} color="#FFF" style={{marginHorizontal:20}}/>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  );
}