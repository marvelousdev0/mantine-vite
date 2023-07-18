import { Box, NavLink, Navbar, createStyles } from "@mantine/core";
import { useState } from "react";
import { routes } from "routes/getAppRouteData";

const useStyles = createStyles((theme) => ({
  navigation: {
    fontSize: theme.fontSizes.md,
  },
  icon: {
    marginRight: theme.spacing.md,
  },
  label: {
    fontWeight: 600,
    fontSize: theme.fontSizes.lg,
  },
}));

export default function Navigation({ opened }: { opened: boolean }) {
  const { classes } = useStyles();
  const [active, setActive] = useState(0);

  console.log(active);

  const items = routes.map((item, index) => (
    <NavLink
      key={item.label}
      component="a"
      active={index === active}
      href={item.href}
      label={item.label}
      description={item.description}
      icon={<item.icon size="1.5rem" stroke={1.5} />}
      onClick={() => setActive(index)}
      classNames={{
        root: classes.navigation,
        icon: classes.icon,
        label: classes.label,
      }}
    />
  ));

  return (
    <Navbar
      py="md"
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 240, lg: 320 }}
    >
      <Box>{items}</Box>
    </Navbar>
  );
}
