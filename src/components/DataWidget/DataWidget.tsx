import "./DataWidget.css"
import { useState, useEffect } from "react";
import useLocalStorage from "@hooks/useLocalStorage";
import usePagination from "@hooks/usePagination";
import { TData } from '@pages/Dashboard/Dashboard';

type DataWidgetProps={
    theme:string
}
type TcardTheme=Record<string,Record<string,string>>;
const cardTheme:TcardTheme={
    black:{backgroundColor:"#282828",headingColor:"white",contentColor:"#b4b4b4",footerColor:"white", buttonColor:"white"},
    white:{backgroundColor:"white",headingColor:"#5E5ADB",contentColor:"#474747",footerColor:"black", buttonColor:"black"},
    blue:{backgroundColor:"#5E5ADB",headingColor:"#F1F1F2",contentColor:"#c9c9c9",footerColor:"#F4F4F4", buttonColor:"white"}
}
function DataWidget({theme}:DataWidgetProps) {
    const [pageContent, setPageContent]=useState(9);
    const {getItem}=useLocalStorage("data");
    const data:TData=getItem();
    const [paginatedProducts,nextPage,prevPage,nextDisabled,prevDisabled]=usePagination(pageContent,data.products);
    const productDate = Object.keys(paginatedProducts[0].data);

    function handleResize(){
        if (window.innerWidth < 500) setPageContent(4);
        else if (window.innerWidth < 1000) setPageContent(6);
        else setPageContent(9);
    }
    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize)
        return ()=>window.removeEventListener("resize",handleResize)
    },[]);

    return (
        <div style={{backgroundColor:cardTheme[theme].backgroundColor}} className="dataWidget">
            <table>
                <thead>
                    <tr>
                        <th style={{color:cardTheme[theme].headingColor}} className="dataWidget__firstHeading">Product</th>
                        {productDate.map((date) => 
                        <th key={date} style={{color:cardTheme[theme].headingColor, fontWeight:400}}>{date}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {paginatedProducts.map((product) => (
                        <tr key={product.name}>
                            <td style={{color:cardTheme[theme].contentColor}} className="dataWidget__productName">{product.name}</td>
                            {productDate.map((date) => (
                                <td key={`${product.name}-${date}`} style={{color:cardTheme[theme].contentColor}}>{product.data[date]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
                <tfoot style={{color:cardTheme[theme].footerColor}}>
                    <tr>
                        <td className='dataWidget__productName'>Total</td>
                        {productDate.map((date)=>
                        <td key={date}>
                            {data.products.reduce((acc:number,ele)=>acc+ele.data[date],0)}
                        </td>
                        )}
                    </tr>
                </tfoot>
            </table>
            <div>
                <button style={{color:cardTheme[theme].buttonColor}} className="dataWidget__button" disabled={prevDisabled} onClick={prevPage}>&#12296;</button>
                <button style={{color:cardTheme[theme].buttonColor}} className="dataWidget__button" disabled={nextDisabled} onClick={nextPage}>&#12297;</button>
            </div>
        </div>
    );
}

export default DataWidget;