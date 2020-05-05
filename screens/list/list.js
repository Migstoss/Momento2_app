import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TouchableHighlight, FlatList } from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../App';
import { useIsFocused } from '@react-navigation/native';
import CardComponent from './card-component'

function ListSession({ navigation }) {
  const isFocused = useIsFocused();
  const [sessions, setSession] = useState([]);
  /* Data for the flatlist */
  const fetchTasks = async () =>{
    let response = await fetch('http://192.168.0.2:3000/api/listSession');
    let jsonResponse = await response.json();      
    setSession(jsonResponse.sessions);    
  }
  useEffect(()=>{
      fetchTasks();
  },[isFocused]);

  function Item({ title }) {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.TouchableOpacityContainer}>
        <TouchableOpacity style={styles.TouchableOpacityStyle} onPress={()=>navigation.navigate('Create')}><Text style={styles.TouchableOpacityText}>Agendar Cita</Text></TouchableOpacity>
        <TouchableOpacity style={styles.TouchableOpacityStyle} onPress={()=>navigation.navigate('Home')}><Text style={styles.TouchableOpacityText}>Volver</Text></TouchableOpacity>
      </View>
      <FlatList
        data={sessions}
        renderItem={({ item }) => <CardComponent task={item}/>}
        keyExtractor={ item => item._id}
      >
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9262A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableOpacityContainer: {    
    alignItems: 'center',    
    flexDirection: 'row',
    marginTop: 20
  },
  TouchableOpacityStyle: {
    marginTop: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    width: 140,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center'  
  },
  TouchableOpacityText:{
    fontSize: 15,
    fontWeight: 'bold'
  },
});

export default ListSession;