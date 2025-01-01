import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Flatcards = () => {
  return (
    <View>
      <Text style={[styles.heading, styles.text]}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.text}>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={styles.text}>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.text}>Green</Text>
        </View>
        <View style={[styles.card, styles.cardFour]}>
          <Text style={styles.text}>Cyan</Text>
        </View>
      </View>
    </View>
  );
};

export default Flatcards;

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 5,
  },
  container: {flex: 1, flexDirection: 'row', padding: 8},
  card: {
    margin: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    borderRadius: 4,
  },
  cardOne: {backgroundColor: 'red'},
  cardTwo: {backgroundColor: 'blue'},
  cardThree: {backgroundColor: 'green'},
  cardFour: {backgroundColor: 'cyan'},
  text: {color: 'white'},
});
