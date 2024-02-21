import "./SummaryWidget.css"
import useLocalStorage from "@hooks/useLocalStorage";
import { TData } from '@pages/Dashboard/Dashboard';

type TcardTheme=Record<string,Record<string,string>>;
type TSummaryWidgetProps={
    theme:string
}

function generateSummary(data:TData){
    return "Based on the provided data, the most effective hour of the day to send an email across all stores for all time, with the highest engagement after opening, is at 15:00(3 PM), with a total of 5041 emails opened. The next best hours are 16:00 (4 PM) and 17:00 (5 PM) with 5007 and 4785 emails opened respectively. There is a noticeable drop in a total of 5041 emails opened. The next best hours are 16:00 (4 PM) and 17:00 (5 PM) with 5007 and 4785 emails opened respectively.";
}
const cardTheme:TcardTheme={
    black:{backgroundColor:"#282828",headingColor:"white",contentColor:"#b4b4b4",footerColor:"white", buttonColor:"white"},
    white:{backgroundColor:"white",headingColor:"#5E5ADB",contentColor:"#474747",footerColor:"black", buttonColor:"black"},
    blue:{backgroundColor:"#5E5ADB",headingColor:"#F1F1F2",contentColor:"rgb(238 238 238)",footerColor:"#F4F4F4", buttonColor:"white"}
}
function SummaryWidget({theme}:TSummaryWidgetProps) {
    const {getItem}=useLocalStorage("data");
    const data=generateSummary(getItem());
    return (
        <div style={{backgroundColor:cardTheme[theme].backgroundColor, color:cardTheme[theme].contentColor}} className="summaryWidget">
             <div style={{color:cardTheme[theme].headingColor}} className="heading">Summary</div>
             {data}
        </div>
    )
}

export default SummaryWidget