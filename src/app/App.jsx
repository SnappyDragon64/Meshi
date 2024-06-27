import {useEffect, useState} from "react";
import {initIndexedDB} from "@/services/IndexedDB.js";
import {loadData} from "@/registry/DataLoader.js";
import Header from "@/components/Header.jsx";
import Main from "@/components/Main.jsx";
import {UserProvider} from "@/context/UserContext.jsx";
import {ChallengeProvider} from "@/context/ChallengeContext.jsx";
import "@/registry/Registries.js";
import Spinner from "@/components/misc/Spinner.jsx";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeApp = async () => {
      await initIndexedDB();
      await loadData();
    };

    initializeApp().then(() => setLoading(false));
  }, []);

  return (
    <div className="bg-theme-color-secondary min-h-screen flex flex-col">
      {loading ? (
        <Spinner/>
      ) : (
        <UserProvider>
          <ChallengeProvider>
            <Header/>
            <Main/>
          </ChallengeProvider>
        </UserProvider>
      )}
    </div>
  );
}
