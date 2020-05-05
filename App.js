import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Create from './screens/create/create';
import List from './screens/list/list';
import Delete from './screens/delete/delete';
import Edit from './screens/edit/edit';

function HomeScreen({ navigation }) {  
  return(
    <View style={styles.container}>      
      <View style={styles.container}>
        <View style={styles.topLTriangle}></View>                      
      </View>   
      <View style={styles.background1}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('./assets/logo.png')}></Image>
        </View>        
        <View style={styles.TouchableOpacityContainer}>
          <TouchableOpacity style={styles.TouchableOpacityStyle} onPress={()=>navigation.navigate('Create')}><Text style={styles.TouchableOpacityText}>Agendar Cita</Text></TouchableOpacity>                    
          <TouchableOpacity style={styles.TouchableOpacityStyle} onPress={()=>navigation.navigate('Delete')}><Text style={styles.TouchableOpacityText}>Eliminar Citas</Text></TouchableOpacity>
          <TouchableOpacity style={styles.TouchableOpacityStyle} onPress={()=>navigation.navigate('Edit')}><Text style={styles.TouchableOpacityText}>Editar Cita</Text></TouchableOpacity>
          <TouchableOpacity style={styles.TouchableOpacityStyle} onPress={()=>navigation.navigate('List')}><Text style={styles.TouchableOpacityText}>Ver Citas</Text></TouchableOpacity>          
        </View>        
      </View>
    </View>    
  )
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Create" component={Create}/>
        <Stack.Screen name="Delete" component={Delete}/>
        <Stack.Screen name="List" component={List}/>
        <Stack.Screen name="Edit" component={Edit}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  background1: {
    flex: 4,
    backgroundColor: '#E9262A',
    flexDirection: 'column',
    alignItems: 'center',
  },
  TouchableOpacityContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  TouchableOpacityStyle:{
    marginTop: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    width: 150,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center'
  },
  TouchableOpacityText:{
    fontSize: 15,
    fontWeight: 'bold'
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 150,
    height: 150
  },
  topLTriangle: {
    flex: 1,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 350,
    borderTopWidth: 100,
    borderRightColor: 'transparent',
    borderTopColor: '#E9262A'
  }
});

export default App;
