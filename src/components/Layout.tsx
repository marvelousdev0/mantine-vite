import {
  ActionIcon,
  AppShell,
  Aside,
  Burger,
  Footer,
  Group,
  Header,
  MediaQuery,
  Navbar,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";
import { useState } from "react";
import { usePreferColorScheme } from "hooks/colorScheme";
import { useAppSelector } from "hooks/store";
import { WithChildren } from "types/common";
import { colorScheme as storeColorScheme } from "./ThemeProvider/themeProviderSlice";

export default function Layout({ children }: WithChildren) {
  const theme = useMantineTheme();
  const { onSetUserPreferColorScheme } = usePreferColorScheme();

  const colorScheme = useAppSelector(storeColorScheme);

  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
        >
          <Text>Application navbar</Text>
        </Navbar>
      }
      aside={
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            <Text>Application sidebar</Text>
          </Aside>
        </MediaQuery>
      }
      footer={
        <Footer height={60} p="md">
          Application footer
        </Footer>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Group sx={{ height: "100%" }} position="apart">
              <ActionIcon
                variant="default"
                onClick={() => onSetUserPreferColorScheme()}
                size={30}
              >
                {colorScheme === "dark" ? (
                  <IconSun size="1rem" />
                ) : (
                  <IconMoonStars size="1rem" />
                )}
              </ActionIcon>
            </Group>
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
}
