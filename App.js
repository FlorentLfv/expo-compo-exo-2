import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Image source={require('./assets/rover.jpg')} style={styles.image} />
      </View>
      <View style={styles.containerText}>
        <Text>Le rover Opportunity</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  containerImg: {
    flex: 3
  },
  image: {
    width: '100%',
  },
  containerText: {
    flex: 1,
    justifyContent: 'center'
  }
});
