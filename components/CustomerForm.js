import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Switch, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const CustomerForm = ({ addCustomer }) => {
    const [name, setName] = useState('');
    const [status, setStatus] = useState('Não pago');
    const [product, setProduct] = useState('');
    const [value, setValue] = useState('');
    const [purchaseDate, setPurchaseDate] = useState(new Date());
    const [dueDate, setDueDate] = useState(new Date());
    const [showPurchaseDate, setShowPurchaseDate] = useState(false);
    const [showDueDate, setShowDueDate] = useState(false);

    const handleSubmit = () => {
        addCustomer({
            name,
            status,
            product,
            value,
            purchaseDate: purchaseDate.toISOString(),
            dueDate: dueDate.toISOString(),
        });
        setName('');
        setProduct('');
        setValue('');
        setStatus('Não pago');
        setPurchaseDate(new Date());
        setDueDate(new Date());
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Nome do cliente"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Produto comprado"
                value={product}
                onChangeText={setProduct}
            />
            <TextInput
                style={styles.input}
                placeholder="Valor do produto"
                value={value}
                onChangeText={setValue}
                keyboardType="numeric"
            />
            <View style={styles.switchContainer}>
                <Text>Status: {status}</Text>
                <Switch
                    value={status === 'Pago'}
                    onValueChange={(value) => setStatus(value ? 'Pago' : 'Não pago')}
                />
            </View>
            <Button title="Selecionar Data de Compra" onPress={() => setShowPurchaseDate(true)} />
            {showPurchaseDate && (
                <DateTimePicker
                    value={purchaseDate}
                    mode="date"
                    display="default"
                    onChange={(event, date) => {
                        setShowPurchaseDate(false);
                        if (date) setPurchaseDate(date);
                    }}
                />
            )}
            <Button title="Selecionar Data de Vencimento" onPress={() => setShowDueDate(true)} />
            {showDueDate && (
                <DateTimePicker
                    value={dueDate}
                    mode="date"
                    display="default"
                    onChange={(event, date) => {
                        setShowDueDate(false);
                        if (date) setDueDate(date);
                    }}
                />
            )}
            <View style={styles.buttonContainer}>
                <Button
                    title="Adicionar Cliente"
                    onPress={handleSubmit}
                    color="#008000" // Verde
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 20,
        backgroundColor: '#f5f5f5', // Cor de fundo cinza embaixo input
    },
    input: {
        borderColor: '#000',
        borderWidth: 1,
        padding: 8,
        marginBottom: 10,
        backgroundColor: '#fff', // Cor de fundo branca para o input
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    buttonContainer: {
        marginTop: 10,
    },
});

export default CustomerForm;
