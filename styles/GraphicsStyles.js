import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1B4965',
        marginBottom: 40,
        marginTop: 40
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
    },
    scrollContainer: {
        backgroundColor: "red",
        padding: 20,
    },
    navbar: {
        position: 'absolute',
        bottom: -30,
        left: 0,
        right: 0,
        height: 100,
        backgroundColor: '#244761',
        marginBottom:20  
    },
    graphsContainer: {
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    }
});

export default styles;