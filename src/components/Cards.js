import {View, Text, StyleSheet} from 'react-native';

export default function Cards() {
    return (
        <View>
            <View style={styles.card}>
                <View style={styles.image} />
                <View style={styles.cardContent}>
                    <Text style={styles.cardTitle}>Título do Card 1</Text>
                    <Text style={styles.cardText}>Texto do Card 1.{"\n"}Parágrafo curto.</Text>
                </View>
            </View>

            <View style={styles.card}>
                <View style={styles.image} />
                <View style={styles.cardContent}>
                    <Text style={styles.cardTitle}>Título do Card 2</Text>
                    <Text style={styles.cardText}>Texto do Card 2.{"\n"}Parágrafo curto.</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
card: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 100,
    backgroundColor: "#ffffff",
    marginVertical: 10,
    padding: 10,
    borderRadius: 10
  },
  image: {
    width: 60,
    height: 60,
    backgroundColor: "#ccc",
    marginRight: 15,
    borderRadius: 5
  },
  cardContent: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4
  },
  cardText: {
    fontSize: 16
  }
})