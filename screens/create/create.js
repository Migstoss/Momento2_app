import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

function CreateSession( { navigation } ) {
  const [sessionName, setSessionName] = useState("");
  const [sessionSur, setSessionSur] = useState("");
  const [sessionIdent, setSessionIdent] = useState("");
  const [sessionBirth, setSessionBirth] = useState("");
  const [sessionCity, setSessionCity] = useState("");
  const [sessionDist, setSessionDist] = useState("");
  const [sessionCell, setSessionCell] = useState("");

  const CreateSession = async () =>{
    if( sessionName.length > 0 && sessionSur.length > 0 && sessionIdent.length > 0 && sessionBirth.length > 0 && sessionCity.length > 0 && sessionDist.length > 0 && sessionCell.length > 0){
      if(sessionCell.length < 10){
        try{
          const response = await fetch('http://192.168.0.2:3000/api/addSession',{
            method: 'POST',
            mode: 'cors',
            headers: {
              'Access-Control-Allow-Origin': '*',
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: sessionName,
              surname: sessionSur,
              identification: sessionIdent,
              birthdate: sessionBirth,
              city: sessionCity,
              district: sessionDist,
              cellphone: sessionCell
            }),
          });
          const json = await response.json();
          Alert.alert("Session added successfuly");
          navigation.navigate('List');
        }catch(error){
          console.log(error);
        }
      }else{
        Alert.alert("El número de celular no puede tener mas de 10 dígitos");  
      }
    }else{
      Alert.alert("Todos los campos son obligatorios");
    }

  }

  return (
    <View style={styles.container}>
      <View style={styles.container2}>      
        <TouchableOpacity style={styles.TouchableOpacityStyle} onPress={ CreateSession }><Text style={styles.TouchableOpacityText}>Agendar Cita</Text></TouchableOpacity>        
        <TouchableOpacity style={styles.TouchableOpacityStyle} onPress={()=>navigation.navigate('Home')}><Text style={styles.TouchableOpacityText}>Volver</Text></TouchableOpacity>                    
      </View>
      <TextInput style={styles.TextInputStyle} placeholder="Nombre" onChangeText={text=>setSessionName(text)}/>
      <TextInput style={styles.TextInputStyle} placeholder="Apellido" onChangeText={text=>setSessionSur(text)}/>
      <TextInput style={styles.TextInputStyle} placeholder="Identificación" onChangeText={text=>setSessionIdent(text)}/>
      <TextInput style={styles.TextInputStyle} placeholder="Fecha De Nacimiento" onChangeText={text=>setSessionBirth(text)}/>
      <TextInput style={styles.TextInputStyle} placeholder="Ciudad" onChangeText={text=>setSessionCity(text)}/>
      <TextInput style={styles.TextInputStyle} placeholder="Barrio" onChangeText={text=>setSessionDist(text)}/>
      <TextInput style={styles.TextInputStyle} keyboardType='numeric' placeholder="Número Celular" onChangeText={text=>setSessionCell(text)}/>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9262A',
    alignItems: 'center',
  },
  container2: {
    flexDirection: 'row',
    marginTop: 20
  },
  TouchableOpacityContainer: {    
    alignItems: 'center',    
    flexDirection: 'row',
    marginTop: 15
  },
  TouchableOpacityStyle: {
    flex: 1,
    marginTop: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    width: 140,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center'  
  },
  TextInputContainer: {
    backgroundColor: '#E9262A',
    alignItems: 'center',
    justifyContent: 'center'
  },
  TextInputStyle: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    width: Dimensions.get('screen').width*0.8,
    textAlign: 'center',
    marginTop: 20,
    padding: 10    
  }
});

export default CreateSession;