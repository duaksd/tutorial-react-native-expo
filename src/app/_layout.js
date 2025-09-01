import { Tabs } from "expo-router"
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function RootLayout() {
    return (

        <Tabs screenOptions={{
            tabBarStyle: { backgroundColor: '#3daff1', borderTopColor: '#3daff1' },
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: '#000'
        }}>
            <Tabs.Screen name="index" options={{ title: "Home", headerShown: false, tabBarShowLabel: false, tabBarIcon: ({color}) => <Entypo name="home" size={24} color={color} /> }} />
            <Tabs.Screen name="about" options={{ title: "Sobre", tabBarShowLabel: false, tabBarIcon: ({color}) => <FontAwesome name="question-circle" size={24} color={color} /> }} />
            <Tabs.Screen name="contact" options={{ title: "Contato", tabBarShowLabel: false,  tabBarIcon: ({color}) => <MaterialCommunityIcons name="email" size={24} color={color} /> }} />
            <Tabs.Screen name="profile" options={{ title: "Perfil", tabBarShowLabel: false,  tabBarIcon: ({color}) => <FontAwesome name="user" size={24} color={color} /> }} />
        </Tabs>
    )
}