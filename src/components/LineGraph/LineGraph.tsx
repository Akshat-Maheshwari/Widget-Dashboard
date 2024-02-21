import {useState, useEffect} from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis,Tooltip, Legend, ResponsiveContainer } from 'recharts';
import useLocalStorage from "@hooks/useLocalStorage";
import { TData } from '@pages/Dashboard/Dashboard';
import { cardTheme } from '@components/GraphWidget/GraphWidget';

type TPieGraphProps={
customColors:string[],
theme:string
}

function LineGraph({customColors, theme}:TPieGraphProps) {
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
            <LineChart data={data} >
                <CartesianGrid strokeDasharray="3 3"  />
                <XAxis dataKey="name" label={{ value: "Products", fill:cardTheme[theme].color}} tick={false} axisLine={{ stroke: cardTheme[theme].color}} />
                <YAxis width={30} tick={{ fill: cardTheme[theme].color }} tickLine={{ stroke: cardTheme[theme].color }} axisLine={{ stroke: cardTheme[theme].color }} />
                <Tooltip />
                {showLegend && <Legend />}
                {Object.keys(objData.products[0].data).map((label,idx)=>{
                    return <Line
                        key={label+idx}
                        type="monotone"
                        dataKey={label}
                        stroke={customColors[idx%customColors.length]}
                        strokeWidth={2}
                    />
                })}
            </LineChart>
        </ResponsiveContainer>
    </>
    )
}

export default LineGraph