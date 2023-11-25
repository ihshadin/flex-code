import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./AdminCalendar.css";
import { motion } from "framer-motion";

const AdminCalendar = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  // const startDate = new date().getFullYear();
  // const startDate = new Date(date.getFullYear(), date.getMonth(), 4);
  // const endDate = new Date(date.getFullYear(), date.getMonth(), 25);
  // console.log("start", endDate, startDate);

  return (
    <motion.div
      key="flex_046yu89df"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className="mt-14"
    >
      <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
        My Calendar App
      </h1>
      <Calendar
        goToRangeStartOnSelect={true}
        onChange={handleDateChange}
        value={date}
        // minDate={startDate}
        // maxDate={endDate}
        activeStartDate={date}
        tileClassName=""
        className="border !border-slate-500 rounded-2xl !bg-[#1e2d40] text-white !w-2/3 !h-3/4 mx-auto text-center p-4"
      />
      <p className="text-center pt-2 text-xl md:text-2xl">
        <span className="primary-color font-semibold">
          {date.toString().slice(0, 15)}
        </span>
      </p>
    </motion.div>
  );
};

export default AdminCalendar;
