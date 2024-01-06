import * as React from 'react';
import dayjs from 'dayjs';
import Badge from '@mui/material/Badge';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import MainSpace from '../Components/Mainspace';
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const date=new Date().getDate();
const month=new Date().toISOString().slice(5,7);
const year=new Date().getFullYear();
const userDetails=JSON.parse(localStorage.getItem("data"));


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

const initialValue = dayjs(`${year}-${month}-${date}`);

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
    const [highlightedDays, setHighlightedDays] = React.useState(userDetails?.dashboard?.attendance);
  
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
  
    const task = [
      {
        name: 'MON',
        Completed: userDetails?.dashboard?.task[0],
      }, 
      {
        name: 'TUE',
  
        Completed:userDetails?.dashboard?.task[1],
       
      },
      {
        name: 'WED',
     
        Completed:userDetails?.dashboard?.task[2],
        
      },
      {
        name: 'THU',
       
        Completed:userDetails?.dashboard?.task[3],
       
      },
      {
        name: 'FRI',
     
        Completed:userDetails?.dashboard?.task[4],
        
      },
      {
        name: 'SAT',
        Completed: userDetails?.dashboard?.task[5],
       
      },
      {
        name: 'SUN',
        Completed: userDetails?.dashboard?.task[6],
        
      },
    ];
  
    const codekata = [
        {
          name: 'MON',
          Completed: userDetails?.dashboard?.codekata[0],
        },
        {
          name: 'TUE',
    
          Completed: userDetails?.dashboard?.codekata[1],
         
        },
        {
          name: 'WED',
       
          Completed: userDetails?.dashboard?.codekata[2],
          
        },
        {
          name: 'THU',
         
          Completed: userDetails?.dashboard?.codekata[3],
         
        },
        {
          name: 'FRI',
       
          Completed: userDetails?.dashboard?.codekata[4],
          
        },
        {
          name: 'SAT',
          Completed: userDetails?.dashboard?.codekata[5],
         
        },
        {
          name: 'SUN',
          Completed: userDetails?.dashboard?.codekata[6],
          
        },
      ];
      const webkata = [
        {
          name: 'MON',
          Completed: userDetails?.dashboard?.webkata[0],
        },
        {
          name: 'TUE',
    
          Completed: userDetails?.dashboard?.webkata[1],
         
        },
        {
          name: 'WED',
       
          Completed: userDetails?.dashboard?.webkata[2],
          
        },
        {
          name: 'THU',
         
          Completed: userDetails?.dashboard?.webkata[3],
         
        },
        {
          name: 'FRI',
       
          Completed: userDetails?.dashboard?.webkata[4],
          
        },
        {
          name: 'SAT',
          Completed: userDetails?.dashboard?.webkata[5],
         
        },
        {
          name: 'SUN',
          Completed: userDetails?.dashboard?.webkata[6],
          
        },
      ];
  
    return (
        <MainSpace>
          <div className="subject-section">
              <div className='dashboard-section'>
  
              <div className="card dashboard-card-section">
              <div className="card-body ">
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
  
              <div className="card"><br/>
              <h1 className='text-xl text-center'>Codekata</h1>
              <div className="card-body codekata-card-section">
              
          
            <ResponsiveContainer width="50%" height="65%">
          <BarChart
            width={500}
            height={300}
            data={codekata}
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
            <Bar dataKey="Completed" fill="#8884d8" activeBar={<Rectangle fill="violet" stroke="blue" />} />
          </BarChart>
        </ResponsiveContainer>
                           
              </div>
              </div> 
  
              <div className="card"><br/>
              <h1 className='text-xl text-center'>Webkata</h1>
              <div className="card-body webkata-card-section">
              
              <ResponsiveContainer width="50%" height="65%">
          <BarChart
            width={500}
            height={300}
            data={webkata}
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
            <Bar dataKey="Completed" fill="#8884d8" activeBar={<Rectangle fill="violet" stroke="blue" />} />
          </BarChart>
        </ResponsiveContainer>
                           
              </div>
              </div> 
  
              <div className="card"><br/>
              <h1 className='text-xl text-center'>Tasks</h1>
              <div className="card-body task-card-section">
              
              <ResponsiveContainer width="50%" height="65%">
          <BarChart
            width={500}
            height={300}
            data={task}
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
            <Bar dataKey="Completed" fill="#8884d8" activeBar={<Rectangle fill="violet" stroke="blue" />} />
          </BarChart>
        </ResponsiveContainer>
                           
              </div>
              </div> 
  
          </div>
          </div>
        </MainSpace>
      
    );
  }
  