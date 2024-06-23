import React from "react";
import { useTheme } from "./themeChange/themeChangeContext";

const getTheme = () => {
  const { theme } = useTheme();

  return theme;
};

export default getTheme;
