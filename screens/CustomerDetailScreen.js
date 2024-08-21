import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CustomerDetailScreen = ({ route }) => {
    const { customer } = route.params;
    const [purchaseDate, setPurchaseDate] = useState(new Date(customer.purchaseDate));
    const [dueDate, setDueDate] = useState(new Date(customer.dueDate));

    useEffect(() => {
        setPurchaseDate(new Date(customer.purchaseDate));
        setDueDate(new Date(customer.dueDate));
    }, [customer]);

    return (
        <View style={styles.container}>
            <Text>Nome: {customer.name}</Text>
            <Text>Status: {customer.status}</Text>
            <Text>Produto: {customer.product}</Text>
            <Text>Valor: {customer.value}</Text>
            <Text>Data de Compra: {purchaseDate.toDateString()}</Text>
            <Text>Data de Vencimento: {dueDate.toDateString()}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#f5f5f5', // Cor de fundo detalhes
    },
});

export default CustomerDetailScreen;

