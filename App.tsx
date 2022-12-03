import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

import theme from "./src/theme";

import { Groups } from "./src/screens/Groups";
import { NewGroup } from "./src/screens/NewGroup";
import { Players } from "./src/screens/Players";
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoader] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor="transparent"
        translucent
      />
      
      { fontsLoader ? <Players /> : <Loading /> }
    </ThemeProvider>
  );
}
