import { MantineProvider, createEmotionCache } from "@mantine/core";
import { useAppSelector } from "hooks/store";
import { WithChildren } from "types/common";
import { colorScheme as storeColorScheme } from "./themeProviderSlice";

const myCache = createEmotionCache({ key: "ui" });

export default function ThemeProvider({ children }: WithChildren) {
  const colorScheme = useAppSelector(storeColorScheme);

  return (
    <MantineProvider
      emotionCache={myCache}
      theme={{
        colorScheme,
        fontFamily: "Inter, sans-serif",
        primaryColor: "violet",
      }}
      withCSSVariables
      withGlobalStyles
      withNormalizeCSS
    >
      {children}
    </MantineProvider>
  );
}
