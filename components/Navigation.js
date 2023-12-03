import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./Auth.js"
import HomeScreen from "./HomeScreen.js"
import Agreement from "./Agreement.js"
import Claim from "./Claim.js"
import Calculate from "./Calculate.js"
import Crop from "./Crop.js";

const Stack = createNativeStackNavigator();

function Navigation(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Авторизация" component={LoginScreen}/>
        <Stack.Screen name="Домашняя страница" component={HomeScreen} />
        <Stack.Screen name="Договор" component={Agreement} />
        <Stack.Screen name="Претензия" component={Claim} />
        <Stack.Screen name="Расчет" component={Calculate} />
        <Stack.Screen name="Камера" component={Crop} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;