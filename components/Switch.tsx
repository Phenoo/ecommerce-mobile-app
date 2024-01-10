import {View, Switch, StyleSheet, useColorScheme} from 'react-native';
import React, { useState } from 'react'
import { useTheme } from '@react-navigation/native';

import {Appearance} from 'react-native';
import Colors from '../constants/Colors';

import * as Haptics from 'expo-haptics';



const SwitchComponent = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const {dark}  = useTheme()
    const colorScheme = Appearance.getColorScheme();

    const onValueChange = () => {
      Haptics.notificationAsync(
        Haptics.NotificationFeedbackType.Success
      )
        if (colorScheme === 'dark') {
            Appearance.setColorScheme("light")
        } else{
            Appearance.setColorScheme("dark")
        }
        setIsEnabled(previousState => !previousState)

    }
    

    // const toggleSwitch = () => s;
  
    return (
        <Switch
          trackColor={{false: 'gray', true: 'green'}}
          thumbColor={isEnabled ?  "#fff" : "#111"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={onValueChange}
          value={isEnabled}
        />
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default SwitchComponent

