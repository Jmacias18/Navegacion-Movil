
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const Video = () => {
    return (
        <View style={styles.container}>
            <WebView
                source={{ uri: 'https://www.youtube.com/watch?v=xxdu-PRuwCI&ab_channel=TUDNM%C3%A9xico' }}
                style={styles.video}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    video: {
        flex: 1,
    },
});

export default Video;