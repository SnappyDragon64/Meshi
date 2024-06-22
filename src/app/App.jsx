import {initIndexedDB} from "@/services/IndexedDB.js";
import {loadData} from "@/registry/DataLoader.js";
import Header from "@/components/Header.jsx";
import Main from "@/components/Main.jsx";
import {UserProvider} from "@/context/UserContext.jsx";
import {ChallengeProvider} from "@/context/ChallengeContext.jsx";
import "@/registry/Registries.js";

export default function App() {
  initIndexedDB();
  loadData();

  return (
    <UserProvider>
      <ChallengeProvider>
        <div className="bg-theme-color-secondary min-h-screen flex flex-col">
          <Header/>
          <Main/>
        </div>
      </ChallengeProvider>
    </UserProvider>
  )
}