import {SafeAreaView, ScrollView, Text} from 'react-native';
import React from 'react';
import Flatcards from './components/Flatcards';
import ElevatedCards from './components/Elevatedcards';
import FancyCards from './components/Fancycards';
import ActionCard from './components/Actioncards';
import ContactList from './components/ContactList';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Flatcards />
        <ElevatedCards />
        <FancyCards />
        <ContactList />

        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
};
export default App;
