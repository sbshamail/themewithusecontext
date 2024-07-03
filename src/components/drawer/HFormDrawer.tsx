import React, { FC, useState } from "react";

import useClickOutside from "@/@core/customHooks/useClickOutside";
import HIconify from "../icon/HIconify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
interface Props {
  isOpen: boolean;
  position?: string;
  toggle: () => void;
  closeToggle: () => void;
  size?: number;
  drawerTitle?: string;
  Form?: React.FC;
  rows?: number;
  removeSelection?: () => void;
  fetchData?: () => void;
  formName?: string;
  api?: string;
  stateSelect?: string;
}
const HFormDrawer: FC<Props> = ({
  isOpen,
  position = "right",
  toggle,
  closeToggle,
  size,
  drawerTitle,
  Form,
  rows,
  removeSelection,
  fetchData,
  formName,
  api,
  stateSelect,
}) => {
  const drawerRef = useClickOutside(closeToggle);
  const [formSize, setFormSize] = useState(30);
  if (formSize) {
    size = formSize;
  }
  const positionClass = position === "left" ? "left-0" : "right-0";
  const widthStyle = size ? { width: `${size}em` } : {};

  const [defaultValues, setDefaultValues] = useState({});
  const [schema, setSchema] = useState();
  const {
    reset,
    control,
    setError,
    handleSubmit,
    getValues,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  return (
    <div
      ref={drawerRef}
      style={widthStyle}
      className={`fixed z-[1000] top-0 ${positionClass} max-w-screen h-full bg-white max-h-screen overflow-auto shadow-lg z-50 transform ${
        isOpen
          ? "translate-x-0"
          : position === "left"
          ? "-translate-x-full"
          : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div
        className="absolute right-2 top-1 cursor-pointer hover:text-red-500"
        onClick={closeToggle}
      >
        <HIconify icon={"fa:close"} fontSize="1.2em" />
      </div>
      {/* Drawer Content Here */}
      {isOpen && (
        <div className="p-4">
          <h2 className="font-bold text-lg">{drawerTitle}</h2>
          <div>
            {Form && (
              <Form
                toggle={toggle}
                rows={rows}
                removeSelection={removeSelection}
                fetchData={fetchData}
                formName={formName}
                api={api}
                stateSelect={stateSelect}
                setFormSize={setFormSize}
                hookForms={{
                  reset,
                  control,
                  setError,
                  handleSubmit,
                  getValues,
                  watch,
                  setValue,
                  errors,
                  setDefaultValues,
                  setSchema,
                }}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default HFormDrawer;
