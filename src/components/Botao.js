import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Botao() {
    return (
        <View>
        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Clique Aqui</Text>
      </TouchableOpacity>
    </View>

    )
}


    const styles = StyleSheet.create({
        button: {
          marginTop: 20,
          backgroundColor: "#33dff1",
          paddingVertical: 12,
          paddingHorizontal: 24,
          borderRadius: 8
        },
        buttonText: {
          color: "#334d",
          fontSize: 16,
          fontWeight: "bold"
        }
      });