import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ContactList = () => {
  const contacts = [
    {
      uid: 1,
      name: 'Jason',
      status: 'If you can dream it, do it.',
      imgUrl:
        'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&q=70&fm=webp',
    },
    {
      uid: 2,
      name: 'Amanda',
      status: 'You fail only once you stop trying.',
      imgUrl:
        'https://images.unsplash.com/photo-1505033575518-a36ea2ef75ae?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      uid: 3,
      name: 'Shawn',
      status: 'I came, I saw, I conquered.',
      imgUrl:
        'https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg',
    },
    {
      uid: 4,
      name: 'Monica',
      status: "Show your dreams, don't talk about them.",
      imgUrl:
        'https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      uid: 5,
      name: 'Blaine',
      status: 'You will fall, you will break, you will rise, you will heal.',
      imgUrl:
        'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];
  return (
    <View>
      <Text style={styles.heading}>Contact List</Text>
      <ScrollView style={styles.container}>
        {contacts.map(({uid, name, status, imgUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={{
                uri: imgUrl,
              }}
              style={styles.userImg}
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 5,
  },
  container: {
    paddingHorizontal: 16,
    marginBottom: 4,
    marginTop: 5,
  },
  userImg: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    marginRight: 14,
  },
  userCard: {flex: 1, flexDirection: 'row', marginBottom: 4},
  userName: {fontSize: 16, fontWeight: 600, color: '#FFF'},
  userStatus: {fontSize: 12},
});
