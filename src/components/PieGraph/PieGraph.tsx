import { CartesianGrid, Tooltip, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import useLocalStorage from "@hooks/useLocalStorage";
import { TData } from '@pages/Dashboard/Dashboard';

type TPieGraphProps={
  customColors:string[],
  theme:string
}

function PieGraph({customColors,theme}:TPieGraphProps) {
  const {getItem}=useLocalStorage("data");
  const objData:TData=getItem();
  const data=objData.products.map((obj)=>{
    let total=0;
    for(let key in obj.data) total+=obj.data[key];
    return {name:obj.name, value:total};
  })
  return (
    <>
      <ResponsiveContainer height="100%">
        <PieChart>
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" fill="#8884d8" label>
          {
              data.map((obj, index) => <Cell key={obj.name+index} fill={customColors[index % customColors.length]}/>)
          }
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </>
  )
}

export default PieGraph;