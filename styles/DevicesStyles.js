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
    subHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1B4965',
        marginVertical: 10,
    },
    groupContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    groupItem: {
        backgroundColor: '#1B4965',
        padding: 20,
        borderRadius: 10,
        flex: 1,
        marginHorizontal: 5,
        alignItems: 'center',
    },
    groupText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    deviceItem: {
        backgroundColor: '#1B4965',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    deviceTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    deviceStatus: {
        color: 'white',
        fontSize: 14,
        marginLeft: 10,
    },
    connectButton: {
        backgroundColor: '#1B4965',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default styles;