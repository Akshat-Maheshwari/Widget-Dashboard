import "./GraphWidget.css";
import BarGraph from '@components/BarGraph/BarGraph'
import PieGraph from '@components/PieGraph/PieGraph';
import LineGraph from '@components/LineGraph/LineGraph';

type TGraphWidgetProp={
    graphType:string,
    theme:string
}
const customColors = ['#4CAF50', '#2196F3', '#9C27B0', '#FF9800', '#F44336','#0088FE', '#00C49F', '#FFBB28', '#FF8042','#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
const bgColor:Record<string,string>={blue:"#5E5ADB", white:"white", black:"#282828"}
export const cardTheme:Record<string,Record<string,string>>={black:{color:"white"},white:{color:"#595959"},blue:{color:"white"}};
function GraphWidget({graphType, theme}:TGraphWidgetProp) {
    return (
    <div style={{backgroundColor:bgColor[theme]}} className="graphWidget">
        {graphType=="line" && <LineGraph theme={theme} customColors={customColors} />}
        {graphType=="bar" && <BarGraph theme={theme}  customColors={customColors} />}
        {graphType=="pie" && <PieGraph customColors={customColors}/>}
    </div>
  )
}

export default GraphWidget