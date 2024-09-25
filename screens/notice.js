import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Notice = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>¡Mbappé llega al Real Madrid!</Text>
            <Image
                source={require('../assets/ND-MBAPPE-01_2PC2225.jpg')}
                style={styles.image}
            />
            <Text style={styles.content}>
                El delantero francés Kylian Mbappé ha sido confirmado como el nuevo fichaje del Real Madrid. 
                Después de meses de especulaciones, el joven talento finalmente se une al equipo blanco.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 10,
    },
    content: {
        fontSize: 16,
        lineHeight: 24,
    },
});

export default Notice;