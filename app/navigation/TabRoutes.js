
import React from 'react';
import {Image} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import navigationStrings from '../constants/navigationStrings';
import {HomeScreen, Notification, EditProfile, HomeScreenTeamLeader, HomeScreenOrg} from '../modules/index'
import icons from '../assets/icons'
import { Colors } from '../themes';

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  const typeOfUser='TL'
  let renderComp, renderCompString;
  if(typeOfUser === 'TM'){
    renderComp = HomeScreen
    renderCompString = 'HomeScreen'
  }
  if(typeOfUser === 'TL'){
    renderComp = HomeScreenTeamLeader
    renderCompString = 'HomeScreenTeamLeader'
  }
  if(typeOfUser === 'Org'){
    renderComp = HomeScreenOrg
    renderCompString = 'HomeScreenOrg'
  }

    return (
        <Tab.Navigator screenOptions={{headerShown:false,tabBarShowLabel: false,}}>
          <Tab.Screen
            name={renderCompString}
            component={renderComp}
            options={{
              tabBarIcon: ({focused}) =>{
                return (
                  <Image style={{tintColor: focused ? Colors.navyBlue : Colors.grey,width:40,height:40}} source={icons.home}/>
                )
              }
            }}
          />
          <Tab.Screen
            name={navigationStrings.NOTIFICATION}
            component={Notification}
            options={{
              tabBarIcon: ({focused}) =>{
                return (
                  <Image style={{tintColor: focused ? Colors.navyBlue : Colors.grey,width:40,height:40}} source={icons.notification}/>
                )
              }
            }}
          />
          <Tab.Screen
            name={navigationStrings.EDIT_PROFILE}
            component={EditProfile}
            options={{
              tabBarIcon: ({focused}) =>{
                return (
                  <Image style={{tintColor: focused ? Colors.navyBlue : Colors.grey,width:40,height:40}} source={icons.edit}/>
                )
              }
            }}
          />
        </Tab.Navigator>
      );
}

export default TabRoutes;
