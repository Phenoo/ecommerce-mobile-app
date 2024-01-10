import { FlatList, Image, StyleSheet, TouchableOpacity,  } from 'react-native'
import React from 'react'
import { Text, View } from './Themed'
import { defaultStyles } from '../constants/styles'
import Colors from '../constants/Colors'
import { Ionicons } from '@expo/vector-icons'

const Popular = ({data}: any) => {
  return (
    <View style={{marginTop: 10}}>
      <Text style={styles.text}>Popular</Text>

      <FlatList
            style={{  marginTop: 10}}
            // autoplayInvertDirection
            data={data}
            
            renderItem={({ item }) => <View style={{  width: 250, marginRight: 30}}>
                <View style={{  flexDirection: "column", width: "100%" }}>
                {/* <Image style={styles.image} source={{uri: item.image}} /> */}

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
    </View>
  )
}

export default Popular

const styles = StyleSheet.create({
    text: {
        fontFamily: "bold", 
        fontSize: 24
    }
})