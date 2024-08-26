import { Header } from "./components/1-header";
import { Main } from "./components/2-main";
import { Footer } from "./components/3-footer";

export function App() {
    return (
        <div className="h-screen text-sm 1text-slate-50 1bg-sky-500 grid grid-rows-[auto_1fr_auto]">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}
