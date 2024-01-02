import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import MainSpace from "./Mainspace";

export default function ChartPage(){
 
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

    return(
        <MainSpace>
             <div class="card">
            <div class="card-body codekata-card">
            <h1 className='text-xl text-center'>Codekata</h1>
        
            <ResponsiveContainer width="25%" height="45%">
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
 
       
        </MainSpace>
       
    )
}