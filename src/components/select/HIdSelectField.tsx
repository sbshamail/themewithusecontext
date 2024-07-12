"use client";
import React, { ChangeEvent, FC } from "react";
import HIconify from "../icon/HIconify";
import { useIdSelect } from "@/@core/customHooks/useIdSelect";
import Shadow from "../tag/Shadow";

interface Props {
  list?: [];
  placeholder?: string;
  label?: string;
  idName?: string;
  idField?: string;
  allField?: boolean;
  setValue: (value: any) => void;
  value: any;
  required?: boolean;
}

const HIdSelectField: FC<Props> = ({
  list = [
    { id: 1, name: "select 1" },
    { id: 2, name: "select 2" },
  ],
  placeholder,
  label,
  idName = "name",
  idField = "id",
  allField = false,
  setValue,
  value,
  required,
}) => {
  // const [value, setValue] = useState('');

  const {
    divRef,
    inputRef,
    //states
    open,
    setOpen,
    highlightedIndex,
    searchTerm,
    setSearchTerm,
    filteredList,
    inputValue,
    handleInputKeyDown,
    dropdownPositionClass,
    setHighlightedIndex,
  } = useIdSelect({ list, idName, idField, value, setValue });

  // Functions
  const handleClick = (
    fieldId: string | number,
    fieldName: string,
    all: any
  ) => {
    if (allField) {
      setValue(all);
    } else {
      setValue(fieldId);
    }
    setSearchTerm("");
    setOpen(false);
  };
  const handleRemove = () => {
    setSearchTerm("");
    setValue("");
  };

  const Required = () => <span className="">*</span>;

  const handleEventSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value !== " ") {
      setSearchTerm(value);
      if (!open) {
        setOpen(true);
      }
    }
    if (!value) {
      setValue("");
    }
  };

  return (
    <>
      <div
        className="relative max-w-full"
        onMouseMove={() => setHighlightedIndex(-1)}
      >
        <div className="group">
          {label && (
            <label>
              <span className="capitalize">{label}</span>
              &nbsp;
              {required && Required()}
            </label>
          )}
          <div ref={divRef}>
            <div
              className="cursor-text relative w-full rounded"
              onClick={() => setOpen(!open)}
            >
              <input
                ref={inputRef}
                className="w-full px-4 py-2 outline-none"
                type="text"
                value={searchTerm ? searchTerm : inputValue}
                onChange={handleEventSearch}
                onKeyDown={handleInputKeyDown}
                placeholder={
                  !searchTerm && !inputValue && placeholder
                    ? placeholder
                    : "Search ..."
                }
              />
              <div className="absolute p-2 px-4 right-0 top-1/2 -translate-y-1/2 flex items-center">
                {inputValue ? (
                  <HIconify
                    onClick={handleRemove}
                    fontSize="1.5rem"
                    icon="entypo:cross"
                    className="text-primary cursor-pointer hover:text-red-500"
                  />
                ) : null}
                <HIconify
                  fontSize="1.5rem"
                  icon="bx:caret-down"
                  className="text-primary hover"
                />
              </div>
            </div>

            {open && (
              <Shadow
                space="0"
                className={` select-open ${dropdownPositionClass}`}
              >
                {filteredList.map((item, index) => {
                  const itemName = item[idName];
                  return (
                    <div
                      className="relative flex flex-col z-selection"
                      key={index}
                    >
                      {/* theme */}
                      <div
                        className={` px-4 text-sm cursor-pointer p-2 bg-effect hover:bg-effect-xl text-accent-foreground ${
                          item[idField] === value || index === highlightedIndex
                            ? "bg-effect-xl border border-border"
                            : ""
                        } ${
                          index === highlightedIndex
                            ? "bg-effect-xl border border-border"
                            : ""
                        } `}
                        onClick={() =>
                          handleClick(item[idField], item[idName], item)
                        }
                      >
                        <span className="font-bold">{itemName}</span>
                      </div>
                    </div>
                  );
                })}

                {searchTerm && filteredList.length === 0 && (
                  <div className="px-4 p-2">
                    <span>No Found</span>
                  </div>
                )}
              </Shadow>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HIdSelectField;
