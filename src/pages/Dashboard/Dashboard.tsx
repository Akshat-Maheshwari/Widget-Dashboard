import "./Dashboard.css"
import { Suspense, lazy } from "react";
import TopbarDashboard from '@components/TopbarDashboard/TopbarDashboard';
import Loading from "@components/Loading/Loading";
import useFetch from "@hooks/useFetch";

type TProduct={
  name:string,
  data:Record<string,number>
}
export type TData={
  products:TProduct[]
}

function Dashboard() {
  const [loading, error, data]=useFetch<TData>("./data.json");
  const ContentDashboard=lazy(()=>import('@components/ContentDashboard/ContentDashboard'));
  return (
      <div className="dashboard">
        <TopbarDashboard error={error} loading={loading}/> 
        <Suspense fallback={<Loading />}>
          <ContentDashboard loading={loading} error={error} data={data}/>
        </Suspense>
      </div>
  )
}

export default Dashboard