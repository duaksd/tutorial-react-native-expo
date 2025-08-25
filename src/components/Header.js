import {View, Text, StyleSheet} from 'react-native';
import {Image} from 'expo-image';

export default function Header() {
    return (
        <View style={styles.header}>
                <Image style={styles.headerLogo} source="https://images.vexels.com/media/users/3/299283/isolated/preview/aacf2f15abc44a341489a9c7562d450a-grafico-de-rolo-de-filme.png"/>
                <Text style={styles.tipo}>WatchingFlix</Text>
                <Image style={styles.menu} source="https://static.vecteezy.com/system/resources/previews/019/858/703/non_2x/menu-flat-color-outline-icon-free-png.png" />
              </View>
    )
}

const styles = StyleSheet.create({
    header: {
      flex: 1,
      width: "100%",
      backgroundColor: "#33dff1",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
      paddingHorizontal: 20
    },
    headerLogo: {
      width: 50,
      height: 50,
      resizeMode: 'contain'
    },
    tipo: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#334d"
    },
    menu: {
        width: 30,
        height: 30
      }
})