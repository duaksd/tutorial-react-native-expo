import {View, Text, StyleSheet} from 'react-native';

export default function Footer() {
    return (
        <View style={styles.footer}>
        <Text style={styles.footerText}>Rodapé</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    footer: {
      flex: 1,
      width: "100%",
      backgroundColor: "#1a1a1a",
      justifyContent: "center",
      alignItems: "center"
    },
    footerText: {
      color: "#fff",
      fontSize: 16
    }
  });
  