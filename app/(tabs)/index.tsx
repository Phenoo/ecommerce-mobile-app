import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';
import SwiperHome from '../../components/SwiperHome';
import Listing from '../../components/Listing';

import data from "../../assets/data/data"
import Popular from '../../components/Popular';


const filterItems = data.filter((item, i) => i < 8)

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[ {paddingHorizontal: 15}]}>
        <SwiperHome />
        <Listing data={filterItems} />
        <Popular data={filterItems} />
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
