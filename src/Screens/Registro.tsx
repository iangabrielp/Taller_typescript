// src/PantallaRegistro.tsx
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet,ImageBackground } from 'react-native';

export const Registro = () => {
  return (
    <ImageBackground 
    source={{ uri: 'https://wallpapers.com/images/high/calm-anime-scenery-music-playlist-2jpzfzcng9ikpf9f.webp' }} 
    style={estilos.fondo}
  >
    <View style={estilos.contenedor}>
      <Text style={estilos.titulo}>Registrate</Text>
      <TextInput style={estilos.entrada} placeholder="Nombre" />
      <TextInput style={estilos.entrada} placeholder="Correo" keyboardType="email-address" />
      <TextInput style={estilos.entrada} placeholder="Contraseña" secureTextEntry />
      <Button title="Registrarse" onPress={() => alert('¡Registrado!')} />
      <Button title="Volver" onPress={() => {}} />
    </View>
    </ImageBackground>
  );
};

const estilos = StyleSheet.create({
  fondo: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  titulo: {
    fontSize: 36,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  entrada: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#fff', 
  },
});



