import {useState} from 'react'

function usePagination<T>(pageSize:number,data:T[]):[T[],() => void,() => void,boolean,boolean] {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPage=Math.ceil(data.length/pageSize);
    const pageData = data.slice(
        (currentPage - 1) * pageSize,
        Math.min(currentPage * pageSize,data.length)
    );
    function next(){
        setCurrentPage((page)=>page+1)
    }
    function prev(){
        setCurrentPage((page)=>page-1);
    }
    const nextDisabled=currentPage==totalPage;
    const prevDisabled=currentPage==1;
    return [pageData,next,prev,nextDisabled,prevDisabled];
}

export default usePagination;