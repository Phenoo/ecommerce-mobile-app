import { SafeAreaView, StyleSheet, Text} from 'react-native'
import React from 'react'
import ShopLisitng from '../../components/ShopLisitng'
import { defaultStyles } from '../../constants/styles'
import { View } from '../../components/Themed'

const Page = () => {
  return (
   <SafeAreaView style={defaultStyles.container}>
     <View style={[defaultStyles.container, {paddingTop: 30}]}>
      <ShopLisitng />
    </View>
   </SafeAreaView>
  )
}

export default Page

const styles = StyleSheet.create({

})