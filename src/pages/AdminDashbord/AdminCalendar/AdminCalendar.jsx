import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const AdminCalendar = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  // const startDate = new date().getFullYear();
  const startDate = new Date(date.getFullYear(), date.getMonth(), 4);
  const endDate = new Date(date.getFullYear(), date.getMonth(), 25);
  console.log("start", endDate, startDate);

  return (
    <div className="mt-14">
      <h1 className="text-2xl font-semibold mb-4 text-center">
        My Calendar App
      </h1>
      <Calendar
        onChange={handleDateChange}
        value={date}
        // minDate={startDate}
        // maxDate={endDate}
        activeStartDate={date}
        tileClassName="!border-b-2 border-red-500"
        className="border border-red-500 !bg-secondary-color text-black !w-2/3 !h-3/4	 mx-auto text-center p-4"
      />
      <p className="text-center pt-2 text-lg">
        Today's date is:{" "}
        <span className="text-green-400 font-semibold">
          {date.toString().slice(0, 15)}
        </span>
      </p>
    </div>
  );
};

export default AdminCalendar;
