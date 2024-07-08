"use client";
import { useTheme } from "@/utils/useContext/themeChange/themeChangeContext";
import HButton from "../button/Button";
import { colors } from "@/utils/useContext/themeChange/chooseColor";

const ToggleMode = () => {
  const { theme, toggleTheme, toggleMode } = useTheme();

  return (
    <div className="flex items-center flex-end space-x-2">
      <div
        className="space-x-1"
        style={{
          display: "flex",
          margin: "0 auto",
        }}
      >
        {colors.length > 0 &&
          colors.map((item, index) => (
            <div
              key={index}
              onClick={() => toggleTheme(item.label)}
              className={`rounded-3xl w-5 h-5 border border-[${item.color.toString()}] cursor-pointer flex justify-center items-center bg-[${item.color.toString()}] ${
                theme === item.label ? ` border-4 rounded-3xl p-2` : ""
              }`}
              style={{
                background:
                  theme === "dark" && item.label === "zinc"
                    ? "white"
                    : item.color,
              }}
            ></div>
          ))}
      </div>
      <HButton onClick={toggleMode}>Theme Change</HButton>
    </div>
  );
};

export default ToggleMode;
