import { StyleSheet, Text, View } from 'react-native';
import React from 'react';


export default function App() {
  return (
    <View style={styles.ViewStyle}>
      <Text style={styles.headingText}>My Hobbies:</Text>
      <Text style={styles.subHeading}>1. Soccer</Text>
      <Text style={styles.subHeading}>2. Painting</Text>
      <Text style={styles.subHeading}>3. Gaming</Text>
      <Text style={styles.subHeading}>4. Swimming</Text>
      <Text style={styles.subHeading}>5. Boxing</Text>
    
    </View>
  );
}

const styles = StyleSheet.create({
  ViewStyle: {
    flex: 1,
    backgroundColor: '#90ee90',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  headingText: {
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold',
  },
  subHeading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffc2cd',
  }
});
