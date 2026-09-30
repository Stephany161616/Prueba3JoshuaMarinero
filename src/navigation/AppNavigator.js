import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StudentScreen from '../screens/StudentScreen';
import ShowsScreen from '../screens/ShowsScreen';
import { colors } from '../constants/theme';

const Stack = createNativeStackNavigator();

const navigationTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: colors.background,
    card: colors.surface,
    primary: colors.primary,
    text: colors.text,
    border: colors.border,
  },
};

export default function AppNavigator() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator
        initialRouteName="Student"
        screenOptions={{
          headerStyle: { backgroundColor: colors.surface },
          headerTintColor: colors.primary,
          headerTitleStyle: { color: colors.text, fontWeight: '800' },
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen name="Student" component={StudentScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Shows" component={ShowsScreen} options={{ title: 'Series de TV' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
