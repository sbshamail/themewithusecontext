import { useId, useState } from "react";

import { format, isValid, parse } from "date-fns";
import AlterDatePicker from "@/@core/engineComponents/calender/AlterDatePicker";
import {
  PopOver,
  PopOverContent,
  PopOverTrigger,
} from "@/@core/engineComponents/popOver/PopOver";
import Shadow from "../tag/Shadow";
import HTextField from "../dataEntry/HTextField";

/** Render an input field bound to a DayPicker calendar. */
const InputDatePicker = () => {
  const inputId = useId();

  // Hold the month in state to control the calendar when the input changes
  const [month, setMonth] = useState(new Date());

  // Hold the selected date in state
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  // Hold the input value in state
  const [inputValue, setInputValue] = useState("");

  const handleDayPickerSelect = (date: Date | undefined) => {
    if (!date) {
      setInputValue("");
      setSelectedDate(undefined);
    } else {
      setSelectedDate(date);
      setMonth(date);
      setInputValue(format(date, "MM/dd/yyyy"));
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue(e.target.value); // keep the input value in sync

    const parsedDate = parse(e.target.value, "dd-MM-yyyy", new Date());

    if (isValid(parsedDate)) {
      setSelectedDate(parsedDate);
      setMonth(parsedDate);
    } else {
      setSelectedDate(undefined);
    }
  };

  return (
    <div>
      <PopOver>
        <PopOverTrigger>
          <div className="flex items-center space-x-2">
            <HTextField
              id={inputId}
              inputSize="0"
              maxlength="9"
              size="9"
              onChange={handleInputChange}
              type="text"
              value={inputValue}
              placeholder="dd-MM-yyyy"
            />
          </div>
        </PopOverTrigger>
        <PopOverContent>
          <Shadow space="0">
            <AlterDatePicker
              month={month}
              className="p-3"
              onMonthChange={setMonth}
              mode="single"
              selected={selectedDate}
              onSelect={handleDayPickerSelect}
              footer={
                <p aria-live="assertive" aria-atomic="true">
                  Selected: {selectedDate?.toDateString()}
                </p>
              }
            />
          </Shadow>
        </PopOverContent>
      </PopOver>
    </div>
  );
};
export default InputDatePicker;
