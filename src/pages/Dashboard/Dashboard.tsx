import "./Dashboard.css"
import TopbarDashboard from '@components/TopbarDashboard/TopbarDashboard';
import ContentDashboard from '@components/ContentDashboard/ContentDashboard';
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
  return (
      <div className="dashboard">
        <TopbarDashboard error={error} loading={loading}/> 
        <ContentDashboard loading={loading} error={error} data={data}/>
      </div>
  )
}

export default Dashboard