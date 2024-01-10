import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { TouchableOpacity, useColorScheme } from 'react-native';

import * as SecureStore from 'expo-secure-store';
import CartProvider from '../context/context';
import { Ionicons } from '@expo/vector-icons';
import { Text } from '../components/Themed';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'onboarding',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [loaded, error] = useFonts({
    regular: require('../assets/fonts/Author-Regular.ttf'),
    light: require('../assets/fonts/Author-Light.ttf'),
    medium: require('../assets/fonts/Author-Medium.ttf'),
    semibold: require('../assets/fonts/Author-Semibold.ttf'),
    bold: require('../assets/fonts/Author-Bold.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const [onboardingCompleted, setOnboardingCompleted] = useState(false);
  const colorScheme = useColorScheme();
  const router = useRouter();


  useEffect(() => {
      if (!onboardingCompleted) {
        router.push('/onboarding');
      } else {
        router.replace('/(tabs)');
      }
    
  }, [onboardingCompleted]);

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <CartProvider>
      <Stack initialRouteName='onboarding/index'>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="onboarding/index" options={{ headerShown: false }} />
        <Stack.Screen name="login/index" options={{ headerShown: false }} />
        <Stack.Screen name="signup/index" options={{ headerShown: false }} />
        <Stack.Screen name="listing/[id]" options={{ headerShown: false }} />
        <Stack.Screen name='products/[id]'   />
        <Stack.Screen name="(modals)/cart" options={{
          presentation: 'fullScreenModal',
          title: 'MY CART',
          headerTitleStyle: {
            fontFamily: 'medium',
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Text>
                <Ionicons name="close-outline" size={28} />
              </Text>
            </TouchableOpacity>
          ),
        }}
      /> 
      </Stack>
      </CartProvider>
    </ThemeProvider>
  );
}
