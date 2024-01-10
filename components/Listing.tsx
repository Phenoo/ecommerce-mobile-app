import { Dimensions, Image,  ImageBackground,  StyleSheet, TouchableOpacity, View, } from 'react-native'
import React from 'react'

import SwiperFlatList from 'react-native-swiper-flatlist';

import Animated, { FadeIn, FadeOut } from "react-native-reanimated"
import { useRouter } from 'expo-router';
import { Text } from './Themed';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { defaultStyles } from '../constants/styles';

const { width, height } = Dimensions.get('window');


const Listing = ({data} : any) => {
    const router = useRouter()

  return (
    <Animated.View entering={FadeIn} exiting={FadeOut} style={{ height: 300, marginTop: 20}}>
        <Text style={styles.text}>
            Trending Now
        </Text>
       <SwiperFlatList
        autoplayLoopKeepAnimation
            autoplay
            autoplayDelay={2}
            index={3}
            style={{  marginTop: 10}}
            autoplayLoop
            // autoplayInvertDirection
            data={data}
            renderItem={({ item }) => <View style={{  width: 250, marginRight: 30}}>
                <View style={{  flexDirection: "column", width: "100%" }}>
                <Image style={styles.image} source={{uri: item.image}} />

                    {/* <Text style={{ fontFamily: "bold", fontSize: 30}}>
                        Winter Fashion
                    </Text> */}
                    <View style={{  flexDirection: "row", justifyContent: "space-between", marginVertical: 6 }}>
                        <Text style={{ color: Colors.orange, fontFamily: "bold", fontSize: 26}}>
                            ${item.price}
                        </Text>
                        <TouchableOpacity>
                            <Ionicons name='bookmark-outline' size={20} />
                        </TouchableOpacity>    
                    </View>
                    
                    <Text style={{color: "#8588A7"}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit olor sit amet consectetur
                    </Text>
                </View>
            </View>}
        
    />
    </Animated.View>
  )
}

export default Listing

const styles = StyleSheet.create({
    image: {
      height: height * 0.25,
      width: "100%"
    //   borderRadius: 20,
    //   resizeMode: "contain"
    },
    text: {
        fontFamily: "bold", 
        fontSize: 24
    }
  });