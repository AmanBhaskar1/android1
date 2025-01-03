import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.heading}>Elevated Cards</Text>
      <ScrollView horizontal={true}>
        <View style={styles.container}>
          <View style={[styles.card, styles.cardOne]}>
            <Text>Red</Text>
          </View>
          <View style={[styles.card, styles.cardTwo]}>
            <Text>Blue</Text>
          </View>
          <View style={[styles.card, styles.cardThree]}>
            <Text>Green</Text>
          </View>
          <View style={[styles.card, styles.cardFour]}>
            <Text>Cyan</Text>
          </View>
          <View style={[styles.card, styles.cardFive]}>
            <Text>Orange</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ElevatedCards;

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
    elevation: 10,
  },
  cardOne: {backgroundColor: 'red'},
  cardTwo: {backgroundColor: 'blue'},
  cardThree: {backgroundColor: 'green'},
  cardFour: {backgroundColor: 'cyan'},
  cardFive: {backgroundColor: 'orange'},
});
