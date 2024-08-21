import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import RegisteredDataScreen from './screens/RegisteredDataScreen';
import CustomerDetailScreen from './screens/CustomerDetailScreen';

const Stack = createStackNavigator();

export default function App() {
  const [customers, setCustomers] = useState([]);

  const addCustomer = (customer) => {
    setCustomers([...customers, customer]);
  };

  const removeCustomer = (customer) => {
    setCustomers(customers.filter((c) => c !== customer));
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {(props) => <HomeScreen {...props} addCustomer={addCustomer} />}
        </Stack.Screen>
        <Stack.Screen name="RegisteredData">
          {(props) => <RegisteredDataScreen {...props} customers={customers} removeCustomer={removeCustomer} />}
        </Stack.Screen>
        <Stack.Screen name="CustomerDetail" component={CustomerDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

