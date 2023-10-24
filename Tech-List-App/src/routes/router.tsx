import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const stack = createStackNavigator();

import { ListPage } from "../screens/List/list";

export function Routes(){

  return (
    <NavigationContainer>
      <stack.Navigator>
      <stack.Screen name="Cadastrar" component={ListPage} options={{ headerShown: false }} />
      </stack.Navigator>
    </NavigationContainer>
  )
}