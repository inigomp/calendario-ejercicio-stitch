import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const daysShort = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

const Calendar = ({
  year,
  month,
  selectedDay,
  setSelectedDay,
}: {
  year: number;
  month: number;
  selectedDay: number | null;
  setSelectedDay: (d: number | null) => void;
}) => {
  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfWeek = new Date(year, month, 1).getDay();

  const emptyCells = Array.from({ length: firstDayOfWeek }, (_, i) => (
    <div key={`empty-${i}`} />
  ));

  const dayButtons = Array.from({ length: daysInMonth }, (_, i) => {
    const day = i + 1;
    return (
      <button
        key={day}
        className={`h-12 w-full text-sm font-medium leading-normal flex items-center justify-center rounded-full
          text-white
          ${selectedDay === day ? 'ring-2 ring-blue-400' : ''}
        `}
        onClick={() => setSelectedDay(day)}
      >
        {day}
      </button>
    );
  });

  return (
    <div className="flex min-w-72 max-w-[336px] flex-1 flex-col gap-0.5">
      <div className="flex items-center p-1 justify-between">
        <button aria-label="Previous month">
          <div className="text-white flex size-10 items-center justify-center">
            {/* CaretLeft SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
            </svg>
          </div>
        </button>
        <p className="text-white text-base font-bold leading-tight flex-1 text-center">
          {monthNames[month]} {year}
        </p>
        <button aria-label="Next month">
          <div className="text-white flex size-10 items-center justify-center">
            {/* CaretRight SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
            </svg>
          </div>
        </button>
      </div>
      <div className="grid grid-cols-7">
        {daysShort.map((d) => (
          <p key={d} className="text-white text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">{d}</p>
        ))}
        {emptyCells}
        {dayButtons}
      </div>
    </div>
  );
};

const App = () => {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const goToPrevMonth = () => {
    setSelectedDay(null);
    if (month === 0) {
      setMonth(11);
      setYear((y) => y - 1);
    } else {
      setMonth((m) => m - 1);
    }
  };

  const goToNextMonth = () => {
    setSelectedDay(null);
    if (month === 11) {
      setMonth(0);
      setYear((y) => y + 1);
    } else {
      setMonth((m) => m + 1);
    }
  };

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#121416] dark justify-between group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Lexend, "Noto Sans", sans-serif' }}
    >
      <div>
        <div className="flex items-center bg-[#121416] p-4 pb-2 justify-between">
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pl-12">
            Activity
          </h2>
          <div className="flex w-12 items-center justify-end">
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 bg-transparent text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
              <div className="text-white" data-icon="Gear" data-size="24px" data-weight="regular">
                {/* Gear Icon SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 p-4">
          <Calendar
            year={year}
            month={month}
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
          />
        </div>
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
