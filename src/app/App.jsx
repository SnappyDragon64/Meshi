import Header from "@/components/Header.jsx";
import Main from "@/components/Main.jsx";
import {AppProvider} from "@/context/AppContext.jsx";
import {initIndexedDB} from "@/services/IndexedDB.js";
import {loadData} from "@/registry/DataLoader.js";
import "@/registry/Registries.js";

export default function App() {
  initIndexedDB();
  loadData();

  return (
    <AppProvider>
      <div className="bg-theme-color-secondary min-h-screen flex flex-col">
        <Header/>
        <Main/>
      </div>
    </AppProvider>
  )
}