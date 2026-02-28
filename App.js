import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScrollView, View, Text, Button, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

function ScreenComponent({ route }) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.rowContainer}>
        <Text style={styles.text}>
          {route.params?.titulo}
        </Text>
        <Button
          title="Presionar"
          onPress={() => alert(`Botón en ${route.params?.titulo}`)}
          color="#6be2f1"
        />
      </View>

      {/* Ejemplo de contenido largo */}
      {Array.from({ length: 10 }).map((_, i) => (
        <Text key={i} style={styles.parrafo}>
          Contenido adicional {i + 1}
        </Text>
      ))}
    </ScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarItemStyle: { flex: 1 },
          headerTitleAlign: 'center',
          tabBarStyle: {
            backgroundColor: '#222',
            height: 70,
          },
          tabBarActiveTintColor: '#6be2f1',
          tabBarInactiveTintColor: '#aaa',
          headerStyle: { backgroundColor: '#222' },
          headerTintColor: '#6be2f1',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Tab.Screen
          name="Home"
          component={ScreenComponent}
          initialParams={{ titulo: "Home" }}
        />
        <Tab.Screen
          name="Perfil"
          component={ScreenComponent}
          initialParams={{ titulo: "Perfil" }}
        />
        <Tab.Screen
          name="Configuracion"
          component={ScreenComponent}
          initialParams={{ titulo: "Configuración" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    minHeight: '100vh',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  rowContainer: {
    flexDirection: 'row', 
    alignItems: 'center',  
    marginBottom: 20,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    marginRight: 10,
  },
  parrafo: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
});