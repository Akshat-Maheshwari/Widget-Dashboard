import "./AddWidget.css";
import { useState } from 'react'
import addWidgetIcon from '@assets/addWidgetIcon.svg'
import pie from '@assets/pie.svg'
import line from '@assets/line.svg'
import bar from '@assets/bar.svg'
import reset from '@assets/reset.svg'
import DataWidget from '@components/DataWidget/DataWidget'
import GraphWidget from '@components/GraphWidget/GraphWidget'
import SummaryWidget from '@components/SummaryWidget/SummaryWidget'
import useWidgets from '@hooks/useWidgets'

type TAddWidgetProps={
    onClose:()=>void
}

function AddWidget({onClose}:TAddWidgetProps) {
    const [widget,setWidget]=useState('data');
    const [graph,setGraph]=useState('bar');
    const [theme, setTheme]=useState('white');
    const [widgetList, setWidgetList]=useWidgets();
    function handleAdd(){
        const component= 
        (
            (widget=="data" && <DataWidget theme={theme} />) || 
            (widget=="graph" && <GraphWidget graphType={graph} theme={theme} />) ||
            (widget=="summary" && <SummaryWidget theme={theme} />)
        )
        setWidgetList([...widgetList, component]);
        onClose();
    }
  return (
    <div onClick={(e)=>e.stopPropagation()} className="addWidget">
        <div onClick={onClose} className="addWidget__top">✕</div>
        <div className="addWidget__middle">
            <div className="middle__title">
                <div className="middle__title__icon">
                    <img src={addWidgetIcon} />
                </div>
                <div className="middle__title__text">
                    <div className="text__top">Create Widget</div>
                    <div className="text__bottom">Manage the glossary of terms of your Database</div>
                </div>
            </div>
            <div className="middle__titleInput">
                <input placeholder='Reusability Scores'/>
                <span>✕</span>
            </div>
        </div>
        <div className="addWidget__bottom">
            <div className="addWidget__preview">
                {widget=="data" && <DataWidget theme={theme} />}
                {widget=="graph" && <GraphWidget graphType={graph} theme={theme} />}
                {widget=="summary" && <SummaryWidget theme={theme} />}
                <div className="color__palette">
                    <div className={`${theme=="black" && "theme__selected"}`}>
                        <div onClick={()=>setTheme("black")} style={{backgroundColor:"#282828"}} className="color__palette--object"></div>
                    </div>
                    <div className={`${theme=="white" && "theme__selected"}`}>
                        <div onClick={()=>setTheme("white")} style={{backgroundColor:"white"}} className="color__palette--object"></div>
                    </div>
                    <div className={`${theme=="blue" && "theme__selected"}`}>
                        <div onClick={()=>setTheme("blue")} style={{backgroundColor:"#5E5ADB"}} className="color__palette--object"></div>
                    </div>
                </div>
            </div>
            <div className="addWidget__options">
                <div className="options__area">
                    <div className="options__area--title">COMPONENTS</div>
                    <div onClick={()=>setWidget("data")} className={`options__button ${widget=="data" && "widget__selected"}`}>
                        <div className="options__button--title">Data</div>
                        <div className="options__button--desc">Random Description</div>
                    </div>
                    <div onClick={()=>setWidget("graph")} className={`options__button ${widget=="graph" && "widget__selected"}`}>
                        <div className="options__button--title">Graph</div>
                        <div className="options__button--desc">Random Description</div>
                        <div className="graph_options">
                            <div onClick={()=>setGraph("bar")} className={`graph_options--button ${graph=="bar" && "graph__selected"}`}>
                                <img src={bar} /> 
                            </div>
                            <div onClick={()=>setGraph("line")} className={`graph_options--button ${graph=="line" && "graph__selected"}`}>
                                <img src={line} /> 
                            </div>
                            <div onClick={()=>setGraph("pie")} className={`graph_options--button ${graph=="pie" && "graph__selected"}`}>
                                <img src={pie} /> 
                            </div>
                        </div>
                    </div>
                    <div onClick={()=>setWidget("summary")} className={`options__button ${widget=="summary" && "widget__selected"}`}>
                        <div className="options__button--title">Summary</div>
                        <div className="options__button--desc">Random Description</div>
                    </div>
                </div>
                <div className="addWidget__decision">
                    <div className="decision__button decision__button--reset">
                        <img src={reset} />
                    </div>
                    <div onClick={onClose} className="decision__button decision__button--cancel">
                        Cancel
                    </div>
                    <div onClick={handleAdd} className="decision__button decision__button--save">
                        Save
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddWidget;