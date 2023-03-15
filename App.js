import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


import Home from './Screen/home';
import Settings from './Screen/setting'



      const Drawer = createDrawerNavigator();

      export default function App() {
        return (
          <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
              <Drawer.Screen name="Home" component={Home} />
              <Drawer.Screen name="Notifications" component={Settings} />
            </Drawer.Navigator>
          </NavigationContainer>
        );
      }