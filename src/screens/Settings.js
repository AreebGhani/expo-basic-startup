import React from 'react';
import { StyleSheet, View } from 'react-native';
import ChangeThemeButton from '../components/ChangeThemeButton';
import themeStyles from '../styles/theme';

const Settings = () => {
    const { bgColor } = themeStyles();

    return (
        <View style={[styles.container, bgColor]}>
            <ChangeThemeButton />
        </View>
    )
}

export default Settings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
});