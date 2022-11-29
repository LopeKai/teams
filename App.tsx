
import { ThemeProvider } from "styled-components";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

import theme from "./src/theme";

import { Groups } from "./src/screens/Groups";
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoader] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <ThemeProvider theme={theme}>
      {
        fontsLoader ? <Groups /> : <Loading />
      }
    </ThemeProvider>
  );
}
