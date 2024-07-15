"use client";
import Button from "@/components/button/Button";
import Drawer from "@/components/drawer/Drawer";
import SimpleModal from "@/components/modals/SimpleModel";
import HIdSelectField from "@/components/select/HIdSelectField";
import MultiSelection from "@/components/select/MultiSelection";
import { useEffect, useState } from "react";

import { useTheme } from "@/utils/useContext/themeChange/themeChangeContext";
import { ls } from "@/@core/action/localStorage";

export const ActiveTheme = () => {
  const { themeProperties } = useTheme();
  return (
    <>
      <div>
        {Object.entries(themeProperties).map(([key, value]: any, index) => {
          return (
            <div key={index} className="flex space-x-2 items-center">
              <span>{key} :</span>
              <div
                style={{ background: `hsl(${value})` }}
                className={`p-2 py-0 m-1 rounded-lg text-green-500`}
              >
                {value}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export const SelectFields = () => {
  const [value, setValue] = useState(null);
  const [values, setValues] = useState([]);
  return (
    <div id="select" className="space-y-4  ">
      <h1 className="text-shadow">Select Fields</h1>
      <div className="w-full gap-4 md:space-y-0 md:gap-2 flex flex-wrap">
        <div className="">
          <HIdSelectField value={value} setValue={setValue} />
        </div>
        <div className="">
          <MultiSelection values={values} setValues={setValues} />
        </div>
      </div>
    </div>
  );
};

export const ModelDrawer = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerOpens, setDrawerOpens] = useState(false);

  return (
    <div id="modal" className="space-y-4 relative ">
      <h1>Modals & Drawer</h1>
      <div className="gap-4 md:space-y-0 md:gap-2 flex flex-wrap">
        <div className="flex items-center">
          Modals:
          <div
            onClick={() => setModalOpen(true)}
            className="ms-2 cursor-pointer"
          >
            <Button>Open Modal</Button>
          </div>
          <SimpleModal open={modalOpen} close={setModalOpen}></SimpleModal>
        </div>
        <div className="flex items-center relative">
          Drawer:
          <div
            onClick={() => setDrawerOpen(true)}
            className="ms-2 cursor-pointer"
          >
            <Button>Open Drawer</Button>
          </div>
          <div>
            <Drawer
              position="right"
              open={drawerOpen}
              size="1"
              close={setDrawerOpen}
            >
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setDrawerOpens(true);
                }}
                className="ms-2 cursor-pointer"
              >
                <Button>Open Nested Drawer</Button>
              </div>
              <Drawer
                position="left"
                open={drawerOpens}
                size="1"
                close={setDrawerOpens}
              >
                <Button>Open Nested Drawer</Button>
              </Drawer>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
};

export const LocalStorage = () => {
  const [value, setValue] = useState();
  useEffect(() => {
    setValue(ls.getAll());
  }, []);
  return (
    <div>
      <h1>Local Storage Data:</h1>
      <pre>{JSON.stringify(value, null, 2)}</pre>
    </div>
  );
};
