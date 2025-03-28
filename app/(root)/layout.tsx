import Navbar from "../components/Navbar";

export default function layout({children}:Readonly<{children:React.ReactNode}>){
    return (
        <main className="font-work-sans w-full">
            <Navbar />
            {children}
        </main>
    )
}