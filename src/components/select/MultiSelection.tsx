import React, { FC } from "react";
import HIconify from "../icon/HIconify";
import { useMultiSelect } from "@/@core/customHooks/useMultiSelect";
import Shadow from "../tag/Shadow";

interface Props {
  list?: Array<{ [key: string]: any }>;
  title?: string;
  setValues: (value: any) => void;
  values: any[];
  itemName?: string;
  itemId?: string;
}
const MultiSelection: FC<Props> = ({
  list = [
    { id: 1, name: "select 1" },
    { id: 2, name: "select 2" },
  ],
  values,
  setValues,
  itemName = "name",
  itemId = itemName,
  title = "title",
}) => {
  const {
    divRef,
    open,
    setOpen,
    dropdownPositionClass,
    highlightedIndex,
    shouldOpenUpwards,
    setHighlightedIndex,
  } = useMultiSelect({ list, itemId, values, setValues });

  const handleClick = (item: { [key: string]: any }) => {
    // Check if the item is already included by looking at a unique identifier, e.g.,[itemId]
    if (values.some((v) => v[itemId] === item[itemId])) {
      // Remove the item if it is already included
      setValues(values.filter((v) => v[itemId] !== item[itemId]));
    } else {
      // Add the item if it is not included
      setValues([...values, item]);
    }
  };
  return (
    <>
      <div onMouseMove={() => setHighlightedIndex(-1)}>
        <div className="relative max-w-full" ref={divRef}>
          <button
            className="relative w-full px-4 p-2 flex items-center justify-between cursor-pointer select-none bordering "
            onClick={() => setOpen(!open)}
          >
            <div className="me-14">
              <span className=" font-semibold">{title}</span>
            </div>
            <div className=" ">
              <HIconify
                fontSize="1.5rem"
                icon="bx:caret-down"
                className="text-primary hover"
              />
            </div>
          </button>
          {open && (
            <Shadow
              space="0"
              className={`select-open ${dropdownPositionClass}`}
            >
              <div className="flex flex-col ">
                {list?.map(
                  (item, index) =>
                    item[itemId] && (
                      <span
                        key={index}
                        className={`px-4 z-selection text-sm cursor-pointer p-2 bg-effect hover:bg-effect-xl text-accent-foreground 
                        ${
                          values.some((v) => v[itemId] === item[itemId])
                            ? "bg-effect-xl border border-border "
                            : ""
                        } ${
                          index === highlightedIndex
                            ? "!bg-accent !text-foreground border-2 border-primary"
                            : ""
                        } `}
                        onClick={() => handleClick(item)}
                      >
                        {item[itemName]}
                      </span>
                    )
                )}
              </div>
            </Shadow>
          )}
        </div>
      </div>
    </>
  );
};

export default MultiSelection;
