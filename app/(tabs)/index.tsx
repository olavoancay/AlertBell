import { FlatList, StyleSheet, Text, View } from 'react-native';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';

// Removi os componentes não utilizados
// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

const notifications = [
  { id: '1', time: '12:30', title: 'Campainha Tocada' },
  { id: '2', time: '12:00', title: 'Campainha Tocada' },
  { id: '3', time: '17:30', title: 'Campainha Tocada' },
  { id: '4', time: '12:30', title: 'Campainha Tocada' },
  { id: '5', time: '12:00', title: 'Campainha Tocada' },
];

// Separar a função de renderização da FlatList para fora do componente principal
const renderItem = ({ item }) => (
  <View style={styles.notificationItem}>
    <TabBarIcon name={'notifications'} color={'#fff'}/>
      <Text style={styles.notificationTitle}>{item.title}</Text>
      
      <Text style={styles.notificationTime}>{item.time}</Text> 
  </View>
);

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Main Notification */}
      <View style={styles.mainNotification}>
        <View>
          <TabBarIcon style={styles.mainNotificationIcon} name={'notifications'} size={60} color='white'/>
        </View>
        <View >
        <Text style={styles.mainNotificationTime}>0:38</Text>
        <Text style={styles.mainNotificationText}>
          Doorbell Rings
        </Text>
        </View>
      </View>

      {/* Notification List */}
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.notificationList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
    padding: 20,
    paddingTop: 50,
  },
  mainNotification: {
    flexDirection: 'row',
    marginVertical: 20,
    textAlign: 'center',
    justifyContent: 'center'
  },
  mainNotificationTime: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  mainNotificationText: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
  },
  mainNotificationIcon: {
    marginRight: 10,
    paddingTop: 10,
    alignItems: 'center',
  },

  notificationList: {
    flex: 1,
    marginTop: 10,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333333',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    shadowColor: '#333333',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  notificationTime: {
    fontSize: 16,
    color: '#fff',
    flex: 1,
    textAlign: 'right',
  },
  notificationTitle: {
    fontSize: 16,
    color: '#fff',
    flex: 1,
    marginLeft: 15,
    textAlign: 'left',
  },

});
