import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

function DeleteSession({ navigation }) {
  const [sessionID, setSessionID] = useState("");

  const DeleteSession = async () =>{
    if(sessionID.length > 0) {
      try{
        const response = await fetch('http://192.168.0.2:3000/api/deleteSession', {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Access-Control-Allow-Origin': '*',
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: sessionID
          }),
        });
        const json = await response.json();
        
        Alert.alert(
          'Eliminar',
          '¿Desea eliminar el registro?',
          [
          {text: 'No', onPress: () => console.log("No pressed"),
        style: 'cancel'},
          {text: 'Si', onPress: () => navigation.navigate('List')}
          ]
        );        
      }catch(error){
        console.log(error);
      }
    }else{
      Alert.alert("Debe digitar un ID");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.container2}>      
        <TouchableOpacity style={styles.TouchableOpacityStyle} onPress={ DeleteSession }><Text style={styles.TouchableOpacityText}>Eliminar Cita</Text></TouchableOpacity>        
        <TouchableOpacity style={styles.TouchableOpacityStyle} onPress={()=>navigation.navigate('Home')}><Text style={styles.TouchableOpacityText}>Volver</Text></TouchableOpacity>                    
      </View>
      <TextInput style={styles.TextInputStyle} id="tiid" placeholder="ID" onChangeText={text=>setSessionID(text)}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9262A',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container2: {
    flexDirection: 'row',
    marginTop: 20
  },
  TextInputStyle: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    width: Dimensions.get('screen').width*0.8,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 100,
    padding: 10
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
});

export default DeleteSession;