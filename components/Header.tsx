import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { defaultStyles } from '../constants/styles'
import { Text, View } from './Themed'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

interface Props{
    title: string;
    headerText: string;
    desc: string;
    actionText: string;
}

const Header = ({title, headerText, desc, actionText} : Props) => {
  const router = useRouter()

  return (
    <View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <TouchableOpacity style={defaultStyles.roundButton} onPress={router.back}>
              <Ionicons name='chevron-back' size={24} />
            </TouchableOpacity>
            
            <View>
              <Text style={defaultStyles.hero}>
                {title}
              </Text>
            </View>
            
            <View></View>
        </View>

        <View style={{marginTop: 60 }}> 
            <Text style={defaultStyles.headerText}>
               {headerText}
            </Text>
            <Text style={[defaultStyles.ptag, { color: "#808080" }]}>
               {desc}
            </Text>

            <View style={{gap: 16, marginTop: 32}}>
                <TouchableOpacity style={[styles.btnOutline, {backgroundColor: "#111"}]}>
                    <Ionicons name='md-logo-apple' size={24} color={"#fff"} style={defaultStyles.btnIcon}/>
                    <Text style={[styles.btnOutlineText, {color: "#FFF"}]}>{actionText} with Apple</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btnOutline, {backgroundColor: "#fff"}]}>
                    <Ionicons name='md-logo-google' size={24} style={defaultStyles.btnIcon}/>
                    <Text style={[styles.btnOutlineText, {color: "#111"}]}>{actionText} with Google</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.speratorView}>
                <View 
                    style={{
                    flex: 1,
                    borderBottomColor: "#808080",
                    borderBottomWidth: StyleSheet.hairlineWidth
                    }}  
                />
                <Text style={styles.separator}>
                    Or type your own          
                </Text>
                <View 
                    style={{
                    flex: 1,
                    borderBottomColor: "#808080",
                    borderBottomWidth: StyleSheet.hairlineWidth
                    }}  
                />
        </View>
        </View>
    </View>

  )
}

export default Header

const styles = StyleSheet.create({
    btnOutline: {
        borderWidth: 1,
        height: 50,
        borderRadius: 24,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        paddingHorizontal: 10
      },
      btnOutlineText: {
        color: "#ffff",
        fontSize: 14,
      },
      speratorView: {
        flexDirection: "row",
        gap:10,
        alignItems: "center",
        marginVertical: 30
      }, 
      separator: {
        fontFamily: "bold"
      },
})