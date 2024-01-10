import { ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';

const Page = () => {
    const router = useRouter()
    // const image = {uri: 'https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=600'};
    const image = {uri: 'https://images.pexels.com/photos/4890733/pexels-photo-4890733.jpeg?auto=compress&cs=tinysrgb&w=600'};
    

    const onRoute = () => {
        router.push("/login/")
    }

    // 
  return (
    <View style={{ flex: 1}}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={{ position: "absolute", top: 50}}>
            <Text style={styles.logo}>Brandx</Text> 
          </View>
          <View style={{ position: "absolute", bottom: 200}}>
            <Text style={styles.hero}>
              Fashion 
            </Text>
            <Text style={styles.hero}>Inspired</Text>
            <Text style={styles.ptag}>
              Discover the best product for fashion
            </Text>
          </View>
          <TouchableOpacity style={styles.btn} onPress={onRoute}>
              <Text style={styles.text}>
                  Get Started
              </Text>
          </TouchableOpacity>
        </ImageBackground>
    </View>
  )
}

export default Page

const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative',
    },
    logo: {
      color: 'white',
      fontSize: 30,
      textTransform: "uppercase"
    },
    image: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: "center",
    //   flexDirection: "column"
    },
    text: {
      color: 'white',
      fontSize: 20,
      lineHeight: 84,
      fontWeight: 'bold',
      fontFamily: "bold",
      textAlign: 'center',
    },
    ptag: {
      fontSize: 16,
      color: 'white',
      fontFamily: "medium",

    },
    hero: {
      fontFamily: "bold",
      fontSize: 44,
      color: 'white',
      textAlign: "center",
      textTransform: "uppercase"
    },
    btn: {
        backgroundColor: "#FC6A03",
        flex: 1,
        width: "100%", 
        position: "absolute",
        bottom: 0, 
        height: 70
    }
  });