"use client";
import React, { useState } from "react";
import AlterDatePicker from "@/@core/engineComponents/calender/AlterDatePicker";
const Calender = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  console.log("calender date", date);

  return (
    <div>
      <AlterDatePicker
        mode="single"
        selected={date}
        onSelect={setDate}
        className=""
      />
    </div>
  );
};

export default Calender;
