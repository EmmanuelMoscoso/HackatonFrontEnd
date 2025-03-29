import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import BottomNavBar from '../../navigation/BottomNavBar';

const DashboardScreen = () => {
  const devices = [
    { id: '1', name: 'Smart Meter 1' },
    { id: '2', name: 'Smart Meter 2' },
    { id: '3', name: 'Leak Sensor' },
  ];

  return (
    <View style={styles.mainContainer}>
      <View style={styles.dashboardHeader}>
        <Text style={styles.dashboardTitle}>Dashboard</Text>
        <Text style={styles.dashboardSubtitle}>+</Text>
      </View>

      <View style={styles.dashboardContainer}>
        {/* Water Consumption Statistics - Styled like the running activity card */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Water Consumption</Text>
            <Text style={styles.sectionDate}>Today, {new Date().toLocaleDateString()}</Text>
          </View>
          <View style={styles.dataRow}>
            <View style={styles.dataItem}>
              <Text style={styles.dataValue}>120</Text>
              <Text style={styles.dataLabel}>Today (L)</Text>
            </View>
            <View style={styles.dataItem}>
              <Text style={styles.dataValue}>840</Text>
              <Text style={styles.dataLabel}>This Week (L)</Text>
            </View>
            <View style={styles.dataItem}>
              <Text style={styles.dataValue}>3600</Text>
              <Text style={styles.dataLabel}>This Month (L)</Text>
            </View>
          </View>
        </View>

        {/* Connected Devices - Styled like the gym activity card */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Connected Devices</Text>
            <Text style={styles.sectionSubtitle}>3 active devices</Text>
          </View>
          <FlatList
            data={devices}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.deviceItem}>
                <View style={styles.deviceBullet} />
                <Text style={styles.deviceText}>{item.name}</Text>
              </View>
            )}
          />
        </View>

        {/* General Graphics - Styled like the analytics section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>General Statistics</Text>
            <Text style={styles.sectionSubtitle}>Weekly overview</Text>
          </View>
          <View style={styles.graphContainer}>
            {/* Placeholder for actual graph/chart component */}
            <View style={styles.graphPlaceholder}>
              <Text style={styles.graphPlaceholderText}>[Water Consumption Chart]</Text>
            </View>
            <View style={styles.graphLegend}>
              <View style={styles.legendItem}>
                <View style={[styles.legendColor, { backgroundColor: '#1D93D2' }]} />
                <Text style={styles.legendText}>Current Week</Text>
              </View>
              <View style={styles.legendItem}>
                <View style={[styles.legendColor, { backgroundColor: '#A5D8F7' }]} />
                <Text style={styles.legendText}>Previous Week</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <BottomNavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#1D93D2',
  },
  dashboardContainer: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: '#fefefe',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  dashboardHeader: {
    marginTop: 60,
    marginBottom: 20,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dashboardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  dashboardSubtitle: {
    fontSize: 24,
    color: '#fff',
  },
  section: {
    backgroundColor: '#E3F2FD',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  sectionHeader: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  sectionDate: {
    fontSize: 12,
    color: '#666',
  },
  sectionSubtitle: {
    fontSize: 12,
    color: '#666',
  },
  dataRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dataItem: {
    alignItems: 'center',
    flex: 1,
  },
  dataValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1D93D2',
    marginBottom: 5,
  },
  dataLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  deviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  deviceBullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#1D93D2',
    marginRight: 10,
  },
  deviceText: {
    fontSize: 16,
    color: '#333',
  },
  graphContainer: {
    marginTop: 10,
  },
  graphPlaceholder: {
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  graphPlaceholderText: {
    color: '#999',
  },
  graphLegend: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  legendColor: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 5,
  },
  legendText: {
    fontSize: 12,
    color: '#666',
  },
});

export default DashboardScreen;