import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Dashboard from '../screens/dashboard';
import Attendance from '../screens/attendance';
import Calendar from '../screens/calendar';
import ShiftPlan from '../screens/shiftplan';
import Live from '../screens/live';
import Org from '../screens/org';
import Tasks from '../screens/tasks';
import Leave from '../screens/leave';
import Onboarding from '../screens/onboarding';
import Payroll from '../screens/payroll';
import Reports from '../screens/reports';

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={({ route }) => ({
          drawerIcon: ({ color, size }) => {
            let iconName;

            switch (route.name) {
              case 'Dashboard':
                iconName = 'view-dashboard-outline';
                break;
              case 'Attendance':
                iconName = 'calendar-check-outline';
                break;
              case 'Calendar':
                iconName = 'calendar-month-outline';
                break;
              case 'Shift Plan':
                iconName = 'calendar-clock';
                break;
              case 'Live':
                iconName = 'access-point';
                break;
              case 'Organization':
                iconName = 'office-building';
                break;
              case 'Tasks':
                iconName = 'clipboard-text-outline';
                break;
              case 'Leave':
                iconName = 'calendar-remove-outline';
                break;
              case 'Onboarding':
                iconName = 'account-plus-outline';
                break;
              case 'Payroll':
                iconName = 'currency-inr';
                break;
              case 'Reports':
                iconName = 'file-chart-outline';
                break;
              default:
                iconName = 'circle';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="Attendance" component={Attendance} />
        <Drawer.Screen name="Calendar" component={Calendar} />
        <Drawer.Screen name="Shift Plan" component={ShiftPlan} />
        <Drawer.Screen name="Live" component={Live} />
        <Drawer.Screen name="Organization" component={Org} />
        <Drawer.Screen name="Tasks" component={Tasks} />
        <Drawer.Screen name="Leave" component={Leave} />
        <Drawer.Screen name="Onboarding" component={Onboarding} />
        <Drawer.Screen name="Payroll" component={Payroll} />
        <Drawer.Screen name="Reports" component={Reports} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
