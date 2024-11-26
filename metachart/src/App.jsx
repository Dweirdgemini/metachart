import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <main className="ml-64">
        <Dashboard />
      </main>
    </div>
  );
};

export default App;
