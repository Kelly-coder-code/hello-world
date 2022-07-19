
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconWithBadge from './iconBadge';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';


import Home from "../containers/Home";
import QRcodeScan from "../containers/QRcodeScan";

const HomeScreen = ({ navigation }) => ( <Home navigation={navigation} /> );
const QRcodeScanScreen = ({ navigation }) => ( <QRcodeScan navigation={navigation} /> );

export const AppNavigator = createBottomTabNavigator({
    Home: {
      screen: HomeScreen
    },
    QRcodeScan: {
      screen: QRcodeScanScreen
    }
  }, {
      defaultNavigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let IconComponent = Ionicons;
          let iconName;
          if (routeName === 'Home') {
              iconName = `ios-home${focused ? '' : ''}`;
              // Sometimes we want to add badges to some icons. 
              // You can check the implementation below.
              if(focused) {
                  return (<IconWithBadge size={25} color={'#4F8EF7'} name={iconName} badgeCount={3} />)
              } else {
                  return (<IconWithBadge size={25} color={'#fff'} name={iconName} badgeCount={3} />)
              }
          } else if (routeName === 'QRcodeScan') {
              iconName = `ios-scan${focused ? '' : ''}`;
          } 
          // You can return any component that you like here!
          return <IconComponent name={iconName} size={25} color={tintColor} />;
          },
      }),
      tabBarOptions: {
          activeTintColor: '#4F8EF7',
          inactiveTintColor: '#fff',
          style: {
            backgroundColor: '#0A0F24',
          }
        },


  });

  export default createAppContainer(AppNavigator);


  
// export default function Navigation({ colorScheme }) {
//   return (
//     <NavigationContainer
//       linking={LinkingConfiguration}
//       theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//       <RootNavigator />
//     </NavigationContainer>
//   );
// }

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
// const Stack = createNativeStackNavigator<RootStackParamList>();

// function RootNavigator() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
//     </Stack.Navigator>
//   );
// }

  


//   const BottomTab = createBottomTabNavigator<RootTabParamList>();

//   function BottomTabNavigator() {
//     const colorScheme = useColorScheme();
  
//     return (
//       <BottomTab.Navigator
//         initialRouteName="Home"
//         screenOptions={{
//           tabBarActiveTintColor: Colors[colorScheme].tint,
//         }}>
//         <BottomTab.Screen
//         name="Home"
//         component={Home}
//         options={{
//           title: 'Home',
//           tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
//         }}
//       />
//           <BottomTab.Screen
//         name="Scan"
//         component={QRcodeScan}
//         options={{
//           title: 'Scan',
//           tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
//         }}
//       />
//     </BottomTab.Navigator>
//     );
//   }



