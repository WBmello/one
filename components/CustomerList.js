import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';

const CustomerList = ({ customers, navigation, removeCustomer }) => {
    return (
        <FlatList
            data={customers}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <View style={styles.item}>
                    <Text>{item.name}</Text>
                    <Text>Status: {item.status}</Text>
                    <View style={styles.buttonContainer}>
                        <Button
                            title="Detalhes"
                            onPress={() => navigation.navigate('CustomerDetail', { customer: item })}
                            color="#00fa9a" // Amarelo
                        />
                        <Button
                            title="Remover"
                            onPress={() => removeCustomer(item)}
                            color="#FF0000" // Vermelho
                        />
                    </View>
                </View>
            )}
        />
    );
};

const styles = StyleSheet.create({
    item: {
        padding: 20,
        borderBottomWidth: 1,
        backgroundColor: '#fffafa', // Cor de fundo 2 neve
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
});

export default CustomerList;


