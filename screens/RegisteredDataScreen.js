import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import CustomerList from '../components/CustomerList';

const RegisteredDataScreen = ({ navigation, customers, removeCustomer }) => {
    return (
        <View style={styles.container}>
            <CustomerList customers={customers} navigation={navigation} removeCustomer={removeCustomer} />
            <View style={styles.buttonContainer}>
                <Button
                    title="Voltar"
                    onPress={() => navigation.goBack()}
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
        backgroundColor: '#f5f5f5', // Cor de fundo cinza
    },
    buttonContainer: {
        marginTop: 10,
    },
});

export default RegisteredDataScreen;

