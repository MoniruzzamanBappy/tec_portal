import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import TableData from "../shared/TableData";
import TextInput from "./Input/TextInput";

const initialTimeData = [
  {
    job_no: "",
    job_name: "",
    hr_36_wk: "",
    wed: "",
    thu: "",
    fri: "",
    sat: "",
    sun: "",
    mon: "",
    tue: "",
    total: "",
  },
];

const initialStartFinishTime = {
  wed: "",
  thu: "",
  fri: "",
  sat: "",
  sun: "",
  mon: "",
  tue: "",
  total: "",
};

const initialData = {
  employee_name: "",
  employee_no: "",
  week_ending: "",
  normal_time: [...initialTimeData],
  over_time: [...initialTimeData],
  normal_time_start_time: { ...initialStartFinishTime },
  normal_time_finish_time: { ...initialStartFinishTime },
  over_time_start_time: { ...initialStartFinishTime },
  over_time_finish_time: { ...initialStartFinishTime },
  hours_ordinary_time: "",
  hours_overtime_1_5: "",
  hours_overtime_2: "",
  hours_overtime_2_5: "",
  hours_night_shift: "",
  hours_productivity_allowance: "",
  hours_site_allowance: "",
  hours_travel_time: "",
  hours_rdo: "",
  hours_public_holiday: "",
  hours_annual_leave: "",
  hours_sick_pay: "",
  hours_tafe: "",
  meals: "",
  living_away_from_home_allowance: "",
  special_allowances: "",
  signature: "",
  approved: "",
  revision_count: 0,
  created_by: "",
};

function AddTimeSheet() {
  const [data, setData] = useState({ ...initialData });
  const [normalTime, setNormalTime] = useState([...initialTimeData]);
  const [overTime, setOverTime] = useState([...initialTimeData]);
  const [normalTimeStartTime, setNormalTimeStartTime] = useState({
    ...initialStartFinishTime,
  });
  const [normalTimeFinishTime, setNormalTimeFinishTime] = useState({
    ...initialStartFinishTime,
  });
  const [overTimeStartTime, setOverTimeStartTime] = useState({
    ...initialStartFinishTime,
  });
  const [overTimeFinishTime, setOverTimeFinishTime] = useState({
    ...initialStartFinishTime,
  });

  // const [approved, setApproved] = useState(false);

  const handleFormSubmit = () => {
    console.log(data, normalTime);
  };

  const normalTimeRowCount = 10;
  const overTimeRowCount = 5;
  const printRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  const [test, setTest] = useState({
    employee_name: "",
    employee_no: "",
  });

  return (
    <div className="text-sm">
      <div ref={printRef} className="relative">
        <h1 className="absolute left-20 bg-gray-800 font-extrabold text-4xl text-white font-serif tracking-wider p-1 px-5">
          TEC
        </h1>
        <div className="text-center text-2xl pt-4 font-medium">
          <h1>
            <span>Time</span>
            <span>sheet</span>
          </h1>
        </div>
        {/* employee info input fields */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 print:grid-cols-3 mt-8">
          <div className="flex items-center">
            <p>Employee Name: </p>
            <input
              type="text"
              value={data?.employee_name || ""}
              list="timeSheet"
              className="border-b border-dashed w-full border-b-gray-700 outline-none border-spacing-2 focus:border-b-black pl-2 flex-1 bg-white"
              onChange={(e) =>
                setData({ ...data, employee_name: e.target.value })
              }
              //   disabled={!approved}
            />
          </div>
          <div className="flex items-center">
            <p>Employee No: </p>
            <input
              type="text"
              value={data?.employee_no || ""}
              list="store"
              className="border-b border-dashed w-full border-b-gray-700 outline-none border-spacing-2 focus:border-b-black pl-2 flex-1 bg-white"
              onChange={(e) =>
                setData({ ...data, employee_no: e.target.value })
              }
              //   disabled={!approved}
            />
          </div>
          <div className="flex items-center">
            <p>Week Ending: </p>
            <input
              value={data?.week_ending || ""}
              type="date"
              className={`border-b border-dashed w-full border-b-gray-700 outline-none border-spacing-2 focus:border-b-black pl-2 flex-1 bg-white`}
              onChange={(e) =>
                setData({ ...data, week_ending: e.target.value })
              }
              //   disabled={!approved}
            />
          </div>
        </div>
        {/* normal time header */}
        <h1 className="text-xl font-semibold text-center mt-4">
          <span className="border-b-2 border-black uppercase">Normal Time</span>
        </h1>
        {/* normal time table */}
        <TableData
          arrayCount={normalTimeRowCount}
          colorGray={true}
          workedHour={normalTime}
          setWorkedHour={setNormalTime}
          startTime={normalTimeStartTime}
          setStartTime={setNormalTimeStartTime}
          finishTime={normalTimeFinishTime}
          setFinishedTime={setNormalTimeFinishTime}
        />
        <h1 className="text-xl font-semibold text-center mt-4">
          <span className="border-b-2 border-black uppercase">Over-Time</span>
        </h1>
        {/* over time table */}
        <TableData
          arrayCount={overTimeRowCount}
          colorGray={false}
          workedHour={overTime}
          setWorkedHour={setOverTime}
          startTime={overTimeStartTime}
          setStartTime={setOverTimeStartTime}
          finishTime={overTimeFinishTime}
          setFinishedTime={setOverTimeFinishTime}
        />

        {/* extra field for work hours */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 print:grid-cols-2">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-4">
              <input
                type="text"
                value={data?.hours_ordinary_time || ""}
                list="timeSheet"
                className="border-2 w-16 outline-none border-black rounded-sm bg-white"
                onChange={(e) =>
                  setData({ ...data, hours_ordinary_time: e.target.value })
                }
                //   disabled={!approved}
              />
              <p className="font-medium text-sm uppercase">
                HOURS ORDINARY TIME @ <span className="font-bold">X 1</span>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="text"
                value={data?.hours_overtime_1_5 || ""}
                list="timeSheet"
                className="border-2 w-16 outline-none border-black rounded-sm bg-white"
                onChange={(e) =>
                  setData({ ...data, hours_overtime_1_5: e.target.value })
                }
                //   disabled={!approved}
              />
              <p className="font-medium text-sm uppercase">
                HOURS OVERTIME @ <span className="font-bold">X 1.5</span>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="text"
                value={data?.hours_overtime_2 || ""}
                list="timeSheet"
                className="border-2 w-16 outline-none border-black rounded-sm bg-white"
                onChange={(e) =>
                  setData({ ...data, hours_overtime_2: e.target.value })
                }
                //   disabled={!approved}
              />
              <p className="font-medium text-sm uppercase">
                HOURS OVERTIME @ <span className="font-bold">X 2</span>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="text"
                value={data?.hours_overtime_2_5 || ""}
                list="timeSheet"
                className="border-2 w-16 outline-none border-black rounded-sm bg-white"
                onChange={(e) =>
                  setData({ ...data, hours_overtime_2_5: e.target.value })
                }
                //   disabled={!approved}
              />
              <p className="font-medium text-sm uppercase">
                HOURS OVERTIME @ <span className="font-bold">X 2.5</span>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="text"
                value={data?.hours_night_shift || ""}
                list="timeSheet"
                className="border-2 w-16 outline-none border-black rounded-sm bg-white"
                onChange={(e) =>
                  setData({ ...data, hours_night_shift: e.target.value })
                }
                //   disabled={!approved}
              />
              <p className="font-medium text-sm uppercase">
                HOURS NIGHT SHIFT @{" "}
                <span className="font-bold">X 1.5/ 1.3 / 1.25 / 1.15</span>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="text"
                value={data?.hours_productivity_allowance || ""}
                list="timeSheet"
                className="border-2 w-16 outline-none border-black rounded-sm bg-white"
                onChange={(e) =>
                  setData({
                    ...data,
                    hours_productivity_allowance: e.target.value,
                  })
                }
                //   disabled={!approved}
              />
              <p className="font-medium text-sm uppercase">
                HOURS PRODUCTIVITY ALLOWANCE
              </p>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="text"
                value={data?.hours_site_allowance || ""}
                list="timeSheet"
                className="border-2 w-16 outline-none border-black rounded-sm bg-white"
                onChange={(e) =>
                  setData({ ...data, hours_site_allowance: e.target.value })
                }
                //   disabled={!approved}
              />
              <p className="font-medium text-sm uppercase">
                HOURS SITE ALLOWANCE
              </p>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="text"
                value={data?.hours_travel_time || ""}
                className="border-2 w-16 outline-none border-black rounded-sm bg-white"
                onChange={(e) =>
                  setData({ ...data, hours_travel_time: e.target.value })
                }
                //   disabled={!approved}
              />
              <p className="font-medium text-sm uppercase">HOURS TRAVEL TIME</p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-4">
              <input
                type="text"
                value={data?.hours_rdo || ""}
                list="timeSheet"
                className="border-2 w-16 outline-none border-black rounded-sm bg-white"
                onChange={(e) =>
                  setData({ ...data, hours_rdo: e.target.value })
                }
                //   disabled={!approved}
              />
              <p className="font-medium text-sm uppercase">HOURS R.D.O</p>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="text"
                value={data?.hours_public_holiday || ""}
                list="timeSheet"
                className="border-2 w-16 outline-none border-black rounded-sm bg-white"
                onChange={(e) =>
                  setData({ ...data, hours_public_holiday: e.target.value })
                }
                //   disabled={!approved}
              />
              <p className="font-medium text-sm uppercase">
                HOURS PUBLIC HOLIDAY
              </p>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="text"
                value={data?.hours_annual_leave || ""}
                className="border-2 w-16 outline-none border-black rounded-sm bg-white"
                onChange={(e) =>
                  setData({ ...data, hours_annual_leave: e.target.value })
                }
                //   disabled={!approved}
              />
              <p className="font-medium text-sm uppercase">
                HOURS ANNUAL LEAVE
              </p>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="text"
                value={data?.hours_sick_pay || ""}
                list="timeSheet"
                className="border-2 w-16 outline-none border-black rounded-sm bg-white"
                onChange={(e) =>
                  setData({ ...data, hours_sick_pay: e.target.value })
                }
                //   disabled={!approved}
              />
              <p className="font-medium text-sm uppercase">HOURS SICK PAY</p>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="text"
                value={data?.hours_tafe || ""}
                list="timeSheet"
                className="border-2 w-16 outline-none border-black rounded-sm bg-white"
                onChange={(e) =>
                  setData({ ...data, hours_tafe: e.target.value })
                }
                //   disabled={!approved}
              />
              <p className="font-medium text-sm uppercase">HOURS TAFE</p>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="text"
                value={data?.hours_meals || ""}
                list="timeSheet"
                className="border-2 w-16 outline-none border-black rounded-sm bg-white"
                onChange={(e) =>
                  setData({ ...data, hours_meals: e.target.value })
                }
                //   disabled={!approved}
              />
              <p className="font-medium text-sm uppercase">MEALS</p>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="text"
                value={data?.hours_living_away_from_home_allowance || ""}
                list="timeSheet"
                className="border-2 w-16 outline-none border-black rounded-sm bg-white"
                onChange={(e) =>
                  setData({
                    ...data,
                    hours_living_away_from_home_allowance: e.target.value,
                  })
                }
                //   disabled={!approved}
              />
              <p className="font-medium text-sm uppercase">
                LIVING AWAY FROM HOME ALLOWANCE
              </p>
            </div>
          </div>
        </div>

        {/* special allowances */}
        <div className="mt-4">
          <p>SPECIAL ALLOWANCES / AMENDMENTS ETC:</p>
          <textarea
            className="w-full h-24 p-2 border-2 border-black outline-none"
            placeholder="Special allowances/amendments etc"
            value={data?.special_allowances || ""}
            onChange={(e) =>
              setData({ ...data, special_allowances: e.target.value })
            }
          />
        </div>

        {/* signature */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 print:grid-cols-2">
          <div className="flex items-center">
            <p className="uppercase">signature: </p>
            <input
              type="text"
              value={data?.signature || ""}
              list="signature"
              className="border-b border-dashed w-full border-b-gray-700 outline-none border-spacing-2 focus:border-b-black pl-2 flex-1 bg-white"
              onChange={(e) => setData({ ...data, signature: e.target.value })}
              //   disabled={!approved}
            />
          </div>
          <div className="flex items-center">
            <p className="uppercase">approved: </p>
            <input
              type="text"
              value={data?.approved || ""}
              list="approved"
              className="border-b border-dashed w-full border-b-gray-700 outline-none border-spacing-2 focus:border-b-black pl-2 flex-1 bg-white"
              onChange={(e) => setData({ ...data, approved: e.target.value })}
              //   disabled={!approved}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4">
        <button
          className=" text-white mt-4 px-6 py-2 rounded-md bg-blue-600"
          onClick={handlePrint}
        >
          Print
        </button>
        <button
          className="text-white mt-4 px-6 py-2 rounded-md bg-teal-600"
          onClick={() => handleFormSubmit()}
        >
          Submit
        </button>
      </div>
      <form action="" className="mb-72" onSubmit={handlePrint}>
        <TextInput
          type="text"
          name="textHere"
          placeholder="Enter text"
          value={test.employee_name}
          onChange={(e) => setTest({ ...test, employee_name: e.target.value })}
          label="Enter Your Email Address"
          className=""
        />
        <TextInput
          type="text"
          name="textHere"
          placeholder="Enter text"
          value={test.employee_no}
          onChange={(e) => setTest({ ...test, employee_no: e.target.value })}
          label="Enter Your Password"
          className=""
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddTimeSheet;