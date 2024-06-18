import {useEffect} from "react";
import Header from "@/components/Header.jsx";
import Main from "@/components/Main.jsx";
import { AppProvider } from "@/context/AppContext.jsx";
import {initIndexedDB} from "@/services/IndexedDB.jsx";

export default function App() {
    useEffect(() => {
        initIndexedDB();
    }, []);

    return (
        <AppProvider>
            <div className="bg-theme-color-secondary min-h-screen flex flex-col">
                <Header/>
                <Main/>
            </div>
        </AppProvider>
    )
}