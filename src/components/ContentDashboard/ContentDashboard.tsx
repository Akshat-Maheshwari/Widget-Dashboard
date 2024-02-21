import "./ContentDashboard.css"
import {useEffect, useRef} from 'react';
import SummaryWidget from "@components/SummaryWidget/SummaryWidget";
import DataWidget from "@components/DataWidget/DataWidget";
import GraphWidget from "@components/GraphWidget/GraphWidget";
import Loading from "@components/Loading/Loading";
import Error from "@components/Error/Error";
import useLocalStorage from "@hooks/useLocalStorage";
import useWidgets from "@hooks/useWidgets";
import { TData } from "@pages/Dashboard/Dashboard";

type TContentDashboard={
  loading:boolean,error:unknown, data:TData|null
}

function ContentDashboard({loading, error,data}:TContentDashboard) {
  const [widgets,setWidget] =useWidgets();
  const {setItem}=useLocalStorage("data");
  const dragItem=useRef(0)
  const dragOverItem=useRef(0);

  useEffect(()=>{
    if(data){ 
      setItem(data);
      setWidget([<DataWidget theme="white" />, <GraphWidget theme="black" graphType="bar" />, <SummaryWidget theme="blue" />])
    }
  },[data])

  function handleArrange() {
    let _widgets = [...widgets];
    const draggedItemContent = _widgets.splice(dragItem.current, 1)[0];
    _widgets.splice(dragOverItem.current, 0, draggedItemContent);
    dragItem.current = 0;
    dragOverItem.current = 0;
    setWidget(_widgets);
  };


  if(loading) return <Loading />
  if(error) return <Error />
  return (
    <div className="contentDashboard">
      {widgets.map((ele,idx)=>{
        return <div 
          key={`${ele} ${idx}`} 
          className="widget__item"
          draggable
          onDragStart={()=>(dragItem.current=idx)}
          onDragEnter={()=>(dragOverItem.current=idx)}
          onDragEnd={handleArrange}
          onDragOver={(e)=>e.preventDefault()}
        >{ele}</div>
      })}
    </div>
  )
}

export default ContentDashboard