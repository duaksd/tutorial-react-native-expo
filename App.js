import { View, Text, StyleSheet } from 'react-native';
import Header from './src/components/Header'
import Cards from './src/components/Cards'; 
import Botao from './src/components/Botao';
import Footer from './src/components/Footer';

function App() {
  return (
    <View style={styles.container}>

      <Header/>

      <View style={styles.content}>
        <Cards/>
        <Botao/>
      </View>

      <View style={styles.footer}>
        <Footer/>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3daff1"
  },
  content: {
    flex: 7,
    width: "100%",
    backgroundColor: "#F54927",
    padding: 20,
    alignItems: "center",
    justifyContent: "flex-start"
  }
});

export default App;
