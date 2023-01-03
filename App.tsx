import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

import { Loading } from './src/components/Loading';
import { Routes } from "./src/routes";

import theme from "./src/theme";


export default function App() {
  const [fontsLoader] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor="transparent"
        translucent
      />
      
      { fontsLoader ? <Routes/> : <Loading /> }
    </ThemeProvider>
  );
}
