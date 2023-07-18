import { IconClipboard, IconNotes, IconHome } from "@tabler/icons-react";

export const HOME = {
  path: "/",
  label: "Home",
  icon: IconHome,
};

export const routes = [
  {
    icon: IconHome,
    label: "Home",
    description: "Mobility Direct home page",
    href: "/",
  },
  {
    icon: IconNotes,
    label: "New Application",
    description: "Create a new application",
    href: "/new-application",
  },
  {
    icon: IconClipboard,
    label: "Intake",
    description: "Intake",
    href: "/intake",
  },
];
