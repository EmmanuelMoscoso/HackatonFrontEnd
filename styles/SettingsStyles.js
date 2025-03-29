import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1B4965',
        marginBottom: 20,
        marginTop: 40
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    itemSubtitle: {
        fontSize: 14,
        color: '#666',
    },
    navbarContainer: {
        position: 'absolute',
        bottom: -30,
        left: 0,
        right: 0,
        height: 100,
        backgroundColor: '#244761',
        marginBottom:20 
    }
});

export default styles;