import React from 'react';
import { View, Button, StyleSheet, Image } from 'react-native';
import CustomerForm from '../components/CustomerForm';

const HomeScreen = ({ navigation, addCustomer }) => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/logo5.png')} style={styles.logo} />
            <CustomerForm addCustomer={addCustomer} />
            <View style={styles.buttonContainer}>
                <Button
                    title="Ver Clientes Cadastrados"
                    onPress={() => navigation.navigate('RegisteredData')}
                    color="#00008B" // Azul escuro
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#f5f5f5', // Cor de fundo 
    },
    logo: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginBottom: 20,
    },
    buttonContainer: {
        marginTop: 10,
    },
});

export default HomeScreen;
