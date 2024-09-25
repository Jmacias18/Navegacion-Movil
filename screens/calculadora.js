
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Switch } from "react-native";

const CalculatorScreen = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    const handleInput = (value) => {
        setInput(input + value);
    };

    const calculateResult = () => {
        try {
            setResult(eval(input).toString());
        } catch (error) {
            setResult("Error");
        }
    };

    const clearInput = () => {
        setInput("");
        setResult("");
    };

    return (
        <View style={[styles.container, darkMode && styles.darkContainer]}>
            <Switch
                value={darkMode}
                onValueChange={() => setDarkMode(!darkMode)}
            />
            <Text style={[styles.input, darkMode && styles.darkText]}>{input}</Text>
            <Text style={[styles.result, darkMode && styles.darkText]}>{result}</Text>
            <View style={styles.buttonsContainer}>
                {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "*", "/"].map((value) => (
                    <TouchableOpacity key={value} onPress={() => handleInput(value)} style={styles.button}>
                        <Text style={styles.buttonText}>{value}</Text>
                    </TouchableOpacity>
                ))}
                <TouchableOpacity onPress={calculateResult} style={styles.button}>
                    <Text style={styles.buttonText}>=</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={clearInput} style={styles.button}>
                    <Text style={styles.buttonText}>C</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    darkContainer: {
        backgroundColor: "#333",
    },
    input: {
        fontSize: 32,
        marginBottom: 20,
    },
    result: {
        fontSize: 24,
        marginBottom: 20,
    },
    darkText: {
        color: "#fff",
    },
    buttonsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    button: {
        width: 60,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
        backgroundColor: "#ddd",
        borderRadius: 30,
    },
    buttonText: {
        fontSize: 24,
    },
});

export default CalculatorScreen;