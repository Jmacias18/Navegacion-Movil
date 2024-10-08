import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

const colores = () => {
    const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');

    const changeColor = (color) => {
        setBackgroundColor(color);
    };

    return (
        <View style={[styles.container, { backgroundColor }]}>
            <Button title="Rojo" onPress={() => changeColor('#FF0000')} />
            <Button title="Verde" onPress={() => changeColor('#00FF00')} />
            <Button title="Azul" onPress={() => changeColor('#0000FF')} />
            <Button title="Amarillo" onPress={() => changeColor('#FFFF00')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default colores;