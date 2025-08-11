import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function App() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerText}>Logo</Text>
        <View style={styles.menu}></View>
      </View>

      <View style={styles.content}>
        
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

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Clique Aqui</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Rodapé</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3daff1"
  },
  header: {
    flex: 1,
    width: "100%",
    backgroundColor: "#33dff1",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20
  },
  headerText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 18
  },
  content: {
    flex: 7,
    width: "100%",
    backgroundColor: "#F54927",
    padding: 20,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
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
  },
  menu: {
    width: 40,
    height: 40,
    backgroundColor: "#050505ff"
  },
  button: {
    marginTop: 20,
    backgroundColor: "#0066cc",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  },
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

export default App;
