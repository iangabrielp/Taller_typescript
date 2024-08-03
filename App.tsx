import React from 'react'
import { SafeAreaView,StyleSheet } from 'react-native';
import { Registro } from './src/Screens/Registro';
import { Inicio } from './src/Screens/Inicio';


const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
    {/*<HomeWordScreen/>*/}
    {/*<Registro/>*/}
    <Inicio/>
    
   </SafeAreaView>
  
  )
}


export default App;