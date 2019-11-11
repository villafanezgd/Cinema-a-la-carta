import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Login/Login'


const Pantallas =  {
  LOGIN: 1,

}




export default function App() {
  //const [pantalla, seleccionarPantalla] = useState (Pantallas.LOGIN)

  return (
    <View>
      <Login />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
