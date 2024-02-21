import { XAxis, YAxis, Legend, CartesianGrid, Tooltip, BarChart, Bar, ResponsiveContainer } from 'recharts';
import useLocalStorage from "@hooks/useLocalStorage";
import { TData } from '@pages/Dashboard/Dashboard';
import {useState, useEffect} from 'react';

type TPieGraphProps={
  customColors:string[],
  theme:string
}

type TcardTheme=Record<string,Record<string,string>>;
const cardTheme:TcardTheme={
    black:{color:"white"},
    white:{color:"#595959"},
    blue:{color:"white"}
}

function PieGraph({customColors,theme}:TPieGraphProps) {
    const [showLegend, setShowLegend] =useState(true);
    const {getItem}=useLocalStorage("data");
    const objData:TData=getItem();
    const data=objData.products.map((obj)=>{
        return {name:obj.name,...obj.data}
    })
    function handleResize(){
        if (window.innerWidth < 500) setShowLegend(false);
        else setShowLegend(true);
    }
    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize)
        return ()=>window.removeEventListener("resize",handleResize)
    },[]);
    return (
        <>
        <ResponsiveContainer height="100%">
            <BarChart data={data} barGap={0}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" label={{ value: "Products", fill:cardTheme[theme].color}} tick={false} axisLine={{ stroke: cardTheme[theme].color}} />
                <YAxis width={30} tick={{ fill: cardTheme[theme].color }} tickLine={{ stroke: cardTheme[theme].color }} axisLine={{ stroke: cardTheme[theme].color }} />
                <Tooltip />
                {showLegend && <Legend />}
                {Object.keys(objData.products[0].data).map((label,idx)=>{
                    return <Bar
                        key={label+idx}
                        type="monotone"
                        dataKey={label}
                        fill={customColors[idx%customColors.length]}
                    />
                })}
            </BarChart>
        </ResponsiveContainer>
        </>
    )
}

export default PieGraph;