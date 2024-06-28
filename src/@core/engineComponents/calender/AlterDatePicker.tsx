import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import HIconify from "../../../components/icon/HIconify";
import { cn } from "@/lib/utils";
export type CalendarProps = React.ComponentProps<typeof DayPicker>;
import { twMerge } from "tailwind-merge";
const AlterDatePicker = ({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) => {
  const [selected, setSelected] = useState<Date>();
  return (
    <>
      <DayPicker
        showOutsideDays={showOutsideDays}
        className={cn("p-2", className)}
        classNames={{
          months:
            "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
          month: "space-y-4",
          caption: "flex justify-center pt-1 relative items-center",
          caption_label: "text-sm font-medium",
          nav: "space-x-1 flex items-center",
          // nav_button: cn(
          //   "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          //   "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
          // ),
          nav_button:
            "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          nav_button_previous: "absolute left-1",
          nav_button_next: "absolute right-1 ",
          table: "w-full border-collapse space-y-1 ",
          head_row: "flex",
          head_cell:
            "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
          row: "flex w-full mt-2",
          cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
          // day: twMerge(
          //   "!hover:bg-black hover:text-primary day",
          //   "h-9 w-9 p-0 font-normal aria-selected:opacity-100 "
          // ),
          day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100 day hover:bg-black hover:text-primary",
          day_range_end: "day-range-end",
          day_selected:
            "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
          day_today: "bg-accent text-accent-foreground",
          day_outside:
            "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
          day_disabled: "text-muted-foreground opacity-50",
          day_range_middle:
            "aria-selected:bg-accent aria-selected:text-accent-foreground",
          day_hidden: "invisible",
          ...classNames,
        }}
        components={{
          IconLeft: ({ ...props }) => (
            <HIconify icon="mdi:chevron-left" fontSize={"1.5em"} />
          ),
          IconRight: ({ ...props }) => (
            <HIconify icon="mdi:chevron-right" fontSize={"1.5em"} />
          ),
        }}
        {...props}
      />
    </>
  );
};

export default AlterDatePicker;
