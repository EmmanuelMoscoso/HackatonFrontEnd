import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { PieChart, BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import styles from '../../styles/GraphicsStyles';
import BottomNavBar from '../../navigation/BottomNavBar';


const screenWidth = Dimensions.get('window').width;

const GraphicsScreen = () => {
    const [timeFrame, setTimeFrame] = useState('Semana');

    const pieData = [
        { name: 'Gasto', population: 75, color: '#1D93D2', legendFontColor: '#1D93D2', legendFontSize: 15 },
        { name: 'Restante', population: 25, color: '#ccc', legendFontColor: '#ccc', legendFontSize: 15 }
    ];

    const barData = {
        labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
        datasets: [{ data: [500, 700, 300, 900, 1200, 800, 600] }]
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Estadísticas</Text>
            <View style={styles.buttonContainer}>
                {['Semana', 'Mes', 'Año'].map((item) => (
                    <TouchableOpacity
                        key={item}
                        style={[styles.button, timeFrame === item && styles.activeButton]}
                        onPress={() => setTimeFrame(item)}
                    >
                        <Text style={[styles.buttonText, timeFrame === item && styles.activeButtonText]}>{item}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <ScrollView>
                <PieChart
                    data={pieData}
                    width={screenWidth - 40}
                    height={200}
                    chartConfig={{
                        backgroundGradientFrom: '#fff',
                        backgroundGradientTo: '#fff',
                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    }}
                    accessor={'population'}
                    backgroundColor={'transparent'}
                    hasLegend={false}
                />
                <BarChart
                    data={barData}
                    width={screenWidth - 40}
                    height={220}
                    chartConfig={{
                        backgroundGradientFrom: '#fff',
                        backgroundGradientTo: '#fff',
                        color: (opacity = 1) => `rgba(29, 147, 210, ${opacity})`,
                        labelColor: () => '#1B4965',
                    }}
                    verticalLabelRotation={30}
                />
            </ScrollView>
            <BottomNavBar/>
        </View>
    );
};

export default GraphicsScreen;