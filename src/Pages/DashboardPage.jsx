import * as React from 'react';
import dayjs from 'dayjs';
import Badge from '@mui/material/Badge';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import MainSpace from '../Components/Mainspace';
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";


function fakeFetch(date, { signal }) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
    //   const daysInMonth = date.daysInMonth();
      const daysToHighlight = [1, 2, 3].map(() => highlightedDays);

      resolve({ daysToHighlight });
    }, 500);

    signal.onabort = () => {
      clearTimeout(timeout);
      reject(new DOMException('aborted', 'AbortError'));
    };
  });
}

const initialValue = dayjs('2024-01-01');

function ServerDay(props) {
  const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

  const isSelected =
    !props.outsideCurrentMonth && highlightedDays.indexOf(props.day.date()) >= 0;

  return (
    <Badge
      key={props.day.toString()}
      overlap="circular"
      badgeContent={isSelected ? '🟢' : undefined}
    >
      <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
    </Badge>
  );
}

export default function DateCalendarServerRequest() {
  const requestAbortController = React.useRef(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [highlightedDays, setHighlightedDays] = React.useState([1, 12, 3, 4]);

  const fetchHighlightedDays = (date) => {
    const controller = new AbortController();
    fakeFetch(date, {
      signal: controller.signal,
    })
      .then(({ daysToHighlight }) => {
        setHighlightedDays(daysToHighlight);
        setIsLoading(false);
      })
      .catch((error) => {
        // ignore the error if it's caused by `controller.abort`
        if (error.name !== 'AbortError') {
          throw error;
        }
      });

    requestAbortController.current = controller;
  };

  React.useEffect(() => {
    fetchHighlightedDays(initialValue);
    // abort request on unmount
    return () => requestAbortController.current?.abort();
  }, []);

  const handleMonthChange = (date) => {
    if (requestAbortController.current) {
      // make sure that you are aborting useless requests
      // because it is possible to switch between months pretty quickly
      requestAbortController.current.abort();
    }

    setIsLoading(true);
    setHighlightedDays([]);
    fetchHighlightedDays(date);
  };

  const data = [
    {
      name: 'Page A',
        pv: 24,
    },
    {
      name: 'Page B',

    pv: 13,
     
    },
    {
      name: 'Page C',
   
      pv: 98,
      
    },
    {
      name: 'Page D',
     
      pv: 39,
     
    },
    {
      name: 'Page E',
   
      pv: 48,
      
    },
    {
      name: 'Page F',
      pv: 38,
     
    },
    {
      name: 'Page G',
      pv: 43,
      
    },
  ];

  return (
      <MainSpace>
        <div className="subject-section">
            <div className='dashboard-section'>

            <div class="card">
            <div class="card-body ">
            <h1 className='text-xl text-center'>Attendance</h1>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
                defaultValue={initialValue}
                // loading={isLoading}
                onMonthChange={handleMonthChange}
                // renderLoading={() => <DayCalendarSkeleton />}
                slots={{
                day: ServerDay,
                }}
                slotProps={{
                day: {
                    highlightedDays,
                },
                }}
            />
            </LocalizationProvider>
            <h1 className='text-xl text-center'>Status : 🟢 - Present</h1>  
            </div>
            </div> 

            <div class="card"><br/>
            <h1 className='text-xl text-center'>Codekata</h1>
            <div class="card-body codekata-card-section">
            
        
          <ResponsiveContainer width="50%" height="65%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="violet" stroke="blue" />} />
        </BarChart>
      </ResponsiveContainer>
                         
            </div>
            </div> 

            <div class="card"><br/>
            <h1 className='text-xl text-center'>Webkata</h1>
            <div class="card-body webkata-card-section">
            
            <ResponsiveContainer width="50%" height="65%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="violet" stroke="blue" />} />
        </BarChart>
      </ResponsiveContainer>
                         
            </div>
            </div> 

            <div class="card"><br/>
            <h1 className='text-xl text-center'>Tasks</h1>
            <div class="card-body task-card-section">
            
            <ResponsiveContainer width="50%" height="65%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="violet" stroke="blue" />} />
        </BarChart>
      </ResponsiveContainer>
                         
            </div>
            </div> 

        </div>
        </div>
      </MainSpace>
    
  );
}
