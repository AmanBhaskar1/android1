import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FancyCards = () => {
  return (
    <View>
      <Text style={[styles.heading, styles.text]}>Fancy Card</Text>
      <ScrollView horizontal={true}>
        <View style={[styles.card, styles.cardElevated]}>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Taj_Mahal_%28Edited%29.jpeg',
            }}
            style={styles.cardImage}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Taj Mahal</Text>
            <Text style={styles.cardLable}>Agra, U.P.</Text>
            <Text style={styles.cardDesc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum fugit quod deserunt exercitationem quia nemo
              necessitatibus cumque aperiam, nesciunt obcaecati!
            </Text>
          </View>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/4/41/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg',
            }}
            style={styles.cardImage}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Hawa Mahal</Text>
            <Text style={styles.cardLable}>Jaipur, Rajasthan</Text>
            <Text style={styles.cardDesc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum fugit quod deserunt exercitationem quia nemo
              necessitatibus cumque aperiam, nesciunt obcaecati!
            </Text>
          </View>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Mysore_Palace_Morning.jpg',
            }}
            style={styles.cardImage}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Mysore Mahal</Text>
            <Text style={styles.cardLable}>Mysore, Karnataka</Text>
            <Text style={styles.cardDesc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum fugit quod deserunt exercitationem quia nemo
              necessitatibus cumque aperiam, nesciunt obcaecati!
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default FancyCards;

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 5,
  },
  text: {color: 'white'},
  card: {
    margin: 5,
    height: 350,
    width: 350,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: 'white',
    elevation: 5,
    shadowOffset: {width: 1, height: 1},
  },
  cardBody: {flex: 1, flexGrow: 1, paddingHorizontal: 12},
  cardImage: {
    height: 180,
    width: 350,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    marginBottom: 8,
  },
  cardTitle: {fontSize: 20, fontWeight: 'bold', marginBottom: 6},
  cardLable: {fontSize: 14, fontWeight: 'light', marginBottom: 4},
  cardDesc: {fontSize: 16, marginBottom: 4},
});
