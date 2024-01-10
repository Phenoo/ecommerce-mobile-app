import { Dimensions, Image,  ImageBackground,  StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React from 'react'

import SwiperFlatList from 'react-native-swiper-flatlist';
import Pagination from './Pagination';
import { useRouter } from 'expo-router';

import Animated, { FadeIn } from "react-native-reanimated"

const { width, height } = Dimensions.get('window');

const newImage = ["https://images.pexels.com/photos/5709661/pexels-photo-5709661.jpeg?auto=compress&cs=tinysrgb&w=600", 
        "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/3620411/pexels-photo-3620411.jpeg?auto=compress&cs=tinysrgb&w=600", 
        "https://images.pexels.com/photos/1778412/pexels-photo-1778412.jpeg?auto=compress&cs=tinysrgb&w=600"];

// const image = index => ({ image: newImage[index % newImage.length] });

// const items = Array.from(Array(5)).map((_, index) => image(index));

const SwiperHome = () => {
    const router = useRouter()
  return (
    <Animated.View entering={FadeIn} style={{ height: 280, marginTop: 60}}>
        <SwiperFlatList
             showPagination
             PaginationComponent={Pagination}
            autoplay
            autoplayDelay={2}
            index={3}
            style={{ borderRadius: 15}}
            autoplayLoop
            // autoplayInvertDirection
            data={newImage}
            renderItem={({ item }) => <ImageBackground style={styles.image} source={{uri: item}}>
                <View style={{ height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", paddingHorizontal: 20, gap: 4, borderRadius: 10, flexDirection: "column", justifyContent:  "center" }}>
                    <Text style={{ color: "#fff", fontFamily: "bold", fontSize: 30}}>
                        Winter Fashion
                    </Text>
                    <Text style={{ color: "#fff", fontFamily: "regular", fontSize: 16}}>
                        All New Winter Collections
                    </Text>
                    <TouchableOpacity 
                        style={{ backgroundColor: "#fff", padding: 10, borderRadius: 20, width: 100, marginTop: 16}}
                        onPress={() => router.push("/(tabs)/shop")}
                    >
                        <Text style={{textAlign: 'center', fontFamily: "bold"}}>
                            Shop Now
                        </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>}
            
        />
    </Animated.View>
  )
}

export default SwiperHome

const styles = StyleSheet.create({
    image: {
      height: height * 0.5,
      width,
      borderRadius: 20,
    //   resizeMode: "contain"
    },
  });