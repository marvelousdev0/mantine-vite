import { MantineProvider, createEmotionCache } from "@mantine/core";
import { useAppSelector } from "hooks/useStore";
import { WithChildren } from "types/common";
import { colorScheme as storeColorScheme } from "./ThemeProvider.slice";

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
