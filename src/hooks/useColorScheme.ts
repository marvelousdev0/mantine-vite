import { ColorScheme } from "@mantine/core";
import { useColorScheme, useHotkeys, useLocalStorage } from "@mantine/hooks";
import { setColorScheme } from "components/ThemeProvider/ThemeProvider.slice";
import { useAppDispatch } from "./useStore";

export function usePreferColorScheme() {
  const colorScheme = useColorScheme();
  const [userPreferColorScheme, setUserPreferColorScheme] =
    useLocalStorage<ColorScheme>({
      key: "color-scheme",
      defaultValue: "light",
    });

  const dispatch = useAppDispatch();

  const onSetUserPreferColorScheme = (value?: ColorScheme) => {
    const scheme =
      value || (userPreferColorScheme === "dark" ? "light" : "dark");
    setUserPreferColorScheme(scheme);
    dispatch(setColorScheme(scheme));
  };

  useHotkeys([["mod+J", () => onSetUserPreferColorScheme()]]);

  return {
    userPreferColorScheme: userPreferColorScheme || colorScheme,
    onSetUserPreferColorScheme,
  };
}
