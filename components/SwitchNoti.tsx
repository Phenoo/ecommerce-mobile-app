import { View, Switch, StyleSheet, useColorScheme } from "react-native";
import React, { useState } from "react";

import * as Haptics from "expo-haptics";

const SwitchComponentNoti = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const onValueChange = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <Switch
      trackColor={{ false: "gray", true: "green" }}
      thumbColor={isEnabled ? "#fff" : "#111"}
      ios_backgroundColor="#3e3e3e"
      onValueChange={onValueChange}
      value={isEnabled}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SwitchComponentNoti;
