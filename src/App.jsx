import Header from "@/components/Header.jsx";
import Main from "@/components/Main.jsx";
import { AppProvider } from "@/lib/Context.jsx";

export default function App() {
    return (
        <AppProvider>
            <div className="bg-theme-color-secondary min-h-screen flex flex-col">
                <Header/>
                <Main/>
            </div>
        </AppProvider>
    )
}