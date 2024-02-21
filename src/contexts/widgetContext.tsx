import { createContext, useState } from "react";

export type TValue=[React.ReactNode[],React.Dispatch<React.SetStateAction<React.ReactNode[]>>]

export const widgetContext=createContext<TValue|null>(null);

export function WidgetProvider({children}:{children:React.ReactNode}){
    const [widgets,setWidgets]=useState<React.ReactNode[]>([]);
    return (
        <widgetContext.Provider value={[widgets,setWidgets]}>
            {children}
        </widgetContext.Provider>
    );
}