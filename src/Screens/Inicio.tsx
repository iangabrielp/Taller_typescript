
import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

export const Inicio = ({ Inicio }: { Inicio: () => void }) => {
  return (
    <ImageBackground 
      source={{ uri: 'https://cdn.pixabay.com/photo/2023/09/17/22/25/witch-8259351_1280.jpg' }} 
      style={estilos.fondo}
    >
      <View style={estilos.contenedor}>
        <Text style={estilos.titulo}>Bienvenido a D'game</Text>
        <Text style={estilos.subtitulo}>¡Únete a nosotros para una experiencia inolvidable!</Text>
        <Button
          title="Ir al Registro"
          onPress={Inicio}
          color="#841584"
        />
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
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  titulo: {
    fontSize: 36,
    color: '#fff',
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
});


