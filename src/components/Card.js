import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

export default function Card({ titulo, desc, img }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={img} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle} numberOfLines={1} ellipsizeMode="tail">
          {titulo}
        </Text>
        <Text style={styles.cardText} numberOfLines={2} ellipsizeMode="tail">
          {desc}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 100, // Altura fixa para todos os cards
    backgroundColor: '#ffffff',
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    elevation: 3, // sombra no Android
    shadowColor: '#000', // sombra no iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 5,
    backgroundColor: '#ccc',
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardText: {
    fontSize: 16,
    color: '#333',
  },
});
