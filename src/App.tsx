import './App.css';
import Dashboard from "@pages/Dashboard/Dashboard";
import Sidebar from '@components/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Dashboard />
    </div> 
  )
}

export default App
