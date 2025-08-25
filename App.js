import { View, Text, StyleSheet } from 'react-native';
import Header from './src/components/Header'
import Card from './src/components/Card'; 
import Botao from './src/components/Botao';
import Footer from './src/components/Footer';

function App() {
  return (
    <View style={styles.container}>

      <Header/>

      <View style={styles.content}>
        <Card titulo="Penthouse: War In Life" 
        desc="Briga de ricos"
        img="https://upload.wikimedia.org/wikipedia/en/0/09/The_Penthouse_TV_series.jpg"/>
        <Card titulo="Money Heist" 
        desc="Uma galera roubando a casa da moeda"
        img="https://preview.redd.it/4s8l1aaz7bh71.jpg?width=640&crop=smart&auto=webp&s=4aa2d92c27685b3b93e7bebc98aa3eb3d1685ec8"/>
        <Card titulo="Yumi's Cells" 
        desc="Células da Yumi"
        img="https://i0.wp.com/asiaon.com.br/wp-content/uploads/2021/09/%E1%84%8B%E1%85%B2%E1%84%86%E1%85%B5%E1%84%8B%E1%85%B4%E1%84%89%E1%85%A6%E1%84%91%E1%85%A9%E1%84%83%E1%85%B3%E1%86%AF_%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%91%E1%85%A9%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5_%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%A9%E1%86%BC_0806-scaled-1.jpg?fit=1790%2C2560&ssl=1"/>
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
    backgroundColor: "#334d",
    padding: 20,
    alignItems: "center",
    justifyContent: "flex-start"
  }
});

export default App;
