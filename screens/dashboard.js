import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, Card, Button, Searchbar, Chip, Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function App() {
  const leaves = [
    { name: 'Alice Johnson', date: '22/04/2025' },
    { name: 'Bob Smith', date: '23/04/2025' },
    { name: 'Carol Lee', date: '24/04/2025' }
  ];

  const sites = [
    { name: 'DLF Cyber City', team: 'Alpha', status: 'Online', workers: 25 },
    { name: 'Infosys SEZ', team: 'Bravo', status: 'Offline', workers: 18 },
    { name: 'Huda Metro', team: 'Charlie', status: 'Online', workers: 14 },
    { name: 'Ambience Mall', team: 'Delta', status: 'Online', workers: 20 }
  ];

  return (
    <ScrollView style={styles.container}>
      <Title style={styles.header}>Dashboard</Title>

      <View style={styles.grid}>
  <StatCard label="Avg Shift" value="8h" icon1="clock-time-eight-outline" color="green" />
  <StatCard label="Overtime Today" value="12h" icon2="alarm-plus" color="#f74b03" />
  <StatCard label="Open Requests" value="3" icon3="email-alert" color="#0f52bb" />
  <StatCard label="Employees" value="150" icon4="account-group" color="#9970c3" />
</View>


      <Card style={styles.sectionCard}>
        <Card.Title title="Upcoming Leave (Next 7 days)" />
        <Card.Content>
          {leaves.map((leave, index) => (
            <Text key={index} style={styles.link}>
              {leave.name} — {leave.date}
            </Text>
          ))}
        </Card.Content>
      </Card>

      <View style={styles.filterRow}>
        <Chip style={styles.chip} icon="account-group">All Teams</Chip>
        <Chip style={styles.chip} icon="check-circle">All Status</Chip>
      </View>
      <Searchbar placeholder="Search sites..." style={styles.searchBar} />

      {sites.map((site, index) => (
        <Card key={index} style={styles.siteCard}>
          <Card.Title title={site.name} subtitle={`Team: ${site.team}`} />
          <Card.Content>
            <Text style={styles.status}>
              Status: <Text style={{ fontWeight: 'bold', color: site.status === 'Online' ? '#4CAF50' : '#FF5722' }}>{site.status}</Text>
            </Text>
            <Text>Workers: {site.workers}</Text>
          </Card.Content>
          <Card.Actions>
            <Button mode="text">View</Button>
          </Card.Actions>
        </Card>
      ))}
    </ScrollView>
  );
}

const StatCard = ({ label, value, icon1, icon2, icon3, icon4, color }) => (
  <Card style={styles.statCard}>
    <Card.Content style={styles.statContent}>
      <Text style={styles.statLabel}>{label}</Text>
      <Text style={styles.statValue}>{value}</Text>
      {icon1 && (
        <Icon name={icon1} size={28} color={color} style={styles.statIconBelow} />
      )}
      {icon2 && (
        <Icon name={icon2} size={28} color={color} style={styles.statIconBelow2} />
      )}
       {icon3 && (
        <Icon name={icon3} size={28} color={color} style={styles.statIconBelow3} />
      )}
       {icon4 && (
        <Icon name={icon4} size={28} color={color} style={styles.statIconBelow4} />
      )}
    </Card.Content>
  </Card>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f9fa'
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    alignSelf: 'center'
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  statCard: {
    width: '48%',
    marginBottom: 12,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2
  },
  statContent: {
    alignItems: 'center',
    paddingVertical: 12
  },
  statLabel: {
    fontSize: 14,
    color: '#555'
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333'
  },
  statIconBelow: {
    marginTop: 8,
    backgroundColor: '#caf7b7',
    padding: 10,
    borderRadius: 20
  },
  statIconBelow2: {
    marginTop: 8,
    backgroundColor: '#f7d4b5',
    padding: 10,
    borderRadius: 20
  },
  statIconBelow3: {
    marginTop: 8,
    backgroundColor: '#a8d1df',
    padding: 10,
    borderRadius: 20
  },
  statIconBelow4: {
    marginTop: 8,
    backgroundColor: '#c5bddc',
    padding: 10,
    borderRadius: 20
  },
  sectionCard: {
    borderRadius: 12,
    marginVertical: 12,
    backgroundColor: '#fff',
    elevation: 2
  },
  link: {
    color: '#1976d2',
    marginVertical: 2
  },
  filterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  chip: {
    backgroundColor: '#e0e0e0',
    marginRight: 8
  },
  searchBar: {
    marginBottom: 16,
    borderRadius: 10
  },
  siteCard: {
    marginBottom: 12,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2
  },
  status: {
    marginBottom: 4
  }
});
