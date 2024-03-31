import { View, Text, Switch, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import themeStyles from '../styles/theme';

const ChangeThemeButton = () => {
    const { theme, changeTheme } = useTheme();
    const { textColor } = themeStyles();

    return (
        <View style={styles.button}>
            <Text style={[styles.btnText, textColor]}>{theme} Theme</Text>
            <Switch
                value={theme === 'dark'}
                onValueChange={changeTheme}
                thumbColor={textColor.color}
                trackColor={{ false: '#ccc', true: '#555' }}
            />
        </View>
    );
};

export default ChangeThemeButton;

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    btnText: {
        textTransform: 'capitalize',
        marginRight: 10,
    }
});
