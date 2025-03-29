import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fefefe',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1B4965',
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        backgroundColor: '#E0E0E0',
    },
    activeButton: {
        backgroundColor: '#1D93D2',
    },
    buttonText: {
        fontSize: 16,
        color: '#1B4965',
    },
    activeButtonText: {
        color: 'white',
    }
});

export default styles;