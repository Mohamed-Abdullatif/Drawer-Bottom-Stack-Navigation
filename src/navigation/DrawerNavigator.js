import {Text, View, SafeAreaView, Image} from 'react-native';
import React from 'react';
import {createDrawerNavigator, DrawerItemList} from '@react-navigation/drawer';
import {
  Address,
  Notifications,
  Orders,
  PaymentMethod,
  Profile,
  Search,
} from '../screens';
import {COLORS, images} from '../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppTabs from './BottomTabNavigator';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => {
        return (
          <SafeAreaView>
            <View
              style={{
                height: 200,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: COLORS.white,
              }}>
              <Image
                source={images.avatar}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 999,
                  marginBottom: 12,
                }}
              />
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: COLORS.black,
                  marginBottom: 6,
                }}>
                Isabella Joanna
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: COLORS.black,
                }}>
                Product Designer
              </Text>
            </View>
            <DrawerItemList {...props} />
          </SafeAreaView>
        );
      }}
      screenOptions={{
        drawerStyle: {
          backgroundColor: COLORS.white,
          width: 250,
        },
        headerStyle: {
          backgroundColor: COLORS.white,
        },
        headerShown: false,
        headerTintColor: COLORS.black,
        drawerLabelStyle: {
          color: COLORS.black,
          fontSize: 14,
          marginLeft: -10,
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={AppTabs}
        options={{
          drawerLabel: 'Home',
          title: 'Home',
          headerShadowVisible: false,
          drawerIcon: () => {
            return <Ionicons name="home" size={24} color={COLORS.black} />;
          },
        }}
      />
      <Drawer.Screen
        name="Orders"
        options={{
          drawerLabel: 'Orders',
          title: 'Orders',
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons name="gift-outline" size={24} color={COLORS.black} />
          ),
        }}
        component={Orders}
      />
      <Drawer.Screen
        name="Search"
        options={{
          drawerLabel: 'Search',
          title: 'Search',
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons name="search-outline" size={24} color={COLORS.black} />
          ),
        }}
        component={Search}
      />
      <Drawer.Screen
        name="Delivery Address"
        options={{
          drawerLabel: 'Delivery Address',
          title: 'Delivery Address',
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons name="location-outline" size={24} color={COLORS.black} />
          ),
        }}
        component={Address}
      />
      <Drawer.Screen
        name="Payment Method"
        options={{
          drawerLabel: 'Payment Method',
          title: 'Payment Method',
          headerShadowVisible: false,
          drawerIcon: () => (
            <EvilIcons name="credit-card" size={24} color={COLORS.black} />
          ),
        }}
        component={PaymentMethod}
      />
      <Drawer.Screen
        name="Notifications"
        options={{
          drawerLabel: 'Notifications',
          title: 'Notifications',
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons
              name="notifications-outline"
              size={24}
              color={COLORS.black}
            />
          ),
        }}
        component={Notifications}
      />
      <Drawer.Screen
        name="Help"
        options={{
          drawerLabel: 'Help',
          title: 'Help',
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons name="help-circle" size={24} color={COLORS.black} />
          ),
        }}
        component={Profile}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
