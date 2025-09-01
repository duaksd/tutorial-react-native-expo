import { View, Text, Button, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'

export default function Profile() {

    const router = useRouter()

    return (
        <View style={styles.container}>
            <Text>Meu Perfil</Text>
            <Button title="Voltar para Home" onPress={() => router.navigate('/')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});