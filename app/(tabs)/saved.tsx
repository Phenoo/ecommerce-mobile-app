import { SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { Text, View } from '../../components/Themed'
import { defaultStyles } from '../../constants/styles'

const Page = () => {
  return (
   <SafeAreaView style={ defaultStyles.container}>
     <View style={styles.container}>
       <Text style={styles.title}>No Item Saved Here.</Text>
    </View>
   </SafeAreaView>
  )
}

export default Page

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
})