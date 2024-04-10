import { Header } from "./header"
import { Footer } from "./Footer"

type Props={
    children: React.ReactNode
}

function layout({children}:Props) {
  return (
    <div className="min-h-screen flex flex-col ">
        <Header/>
        <main className="flex-1 flex flex-col items-center justify-center">
            {children}
        </main>
        <Footer/>
    </div>
  )
}

export default layout