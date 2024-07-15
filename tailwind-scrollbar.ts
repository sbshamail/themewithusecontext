import { PluginCreator } from "tailwindcss/types/config";
const scrollbarPlugin: PluginCreator = ({ addUtilities }) => {
  const scrollUtilities = {
    ".scrollbar::-webkit-scrollbar": {
      width: "8px",
    },
    ".scrollbar::-webkit-scrollbar-track": {
      background: "#f1f1f1",
    },
    ".scrollbar::-webkit-scrollbar-thumb": {
      background: "#888",
      borderRadius: "px",
    },
    ".scrollbar": {
      scrollbarWidth: "thin",
      scrollbarColor: "#888 #f1f1f1",
    },
  };

  addUtilities(scrollUtilities, ["responsive", "hover"]);
};

export default scrollbarPlugin;
