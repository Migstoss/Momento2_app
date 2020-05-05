import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function CardComponent(props){
  const {name, surname, identification, birthdate, city, district, cellphone,_id} = props.task;
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Nombre: {name}</Text>
      <Text style={styles.text}>Apellido: {surname}</Text>
      <Text style={styles.text}>Identificación: {identification}</Text>
      <Text style={styles.text}>F Nacimiento: {birthdate}</Text>
      <Text style={styles.text}>Ciudad: {city}</Text>
      <Text style={styles.text}>Barrio: {district}</Text>
      <Text style={styles.text}>Celular: {cellphone}</Text>
      <Text style={styles.text}>ID: {_id}</Text>   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    padding: 20,
    marginTop: 10,
    width: '100%'
  },
  text: {
    fontSize: 15
  }
});

export default CardComponent;