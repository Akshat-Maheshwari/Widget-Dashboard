import { useContext } from "react";
import { widgetContext, TValue } from "../contexts/widgetContext";

export default function useWidgets(){
    return useContext(widgetContext) as TValue;
}