import Header from "@/components/Header.jsx";
import Main from "@/components/Main.jsx";
import {initIndexedDB} from "@/services/IndexedDB.js";
import {loadData} from "@/registry/DataLoader.js";
import "@/registry/Registries.js";
import {UsernameContext, UsernameProvider} from "@/context/UsernameContext.jsx";
import {RefreshContext, RefreshProvider} from "@/context/RefreshContext.jsx";

export default function App() {
  initIndexedDB();
  loadData();

  return (
    <UsernameProvider>
      <RefreshProvider>
        <div className="bg-theme-color-secondary min-h-screen flex flex-col">
          <Header/>
          <Main/>
        </div>
      </RefreshProvider>
    </UsernameProvider>
  )
}