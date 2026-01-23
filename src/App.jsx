import { assets } from "./assets/assets"
import Contact from "./major-components/Contact"
import Footer from "./major-components/Footer"
import Growth from "./major-components/Growth"
import Header from "./major-components/Header"
import Hero from "./major-components/Hero"
import Reviews from "./major-components/Reviews"
import Sidebar from "./major-components/Sidebar"
import Store from "./major-components/Store"
import Work from "./major-components/Work"
import { WorkFlow } from "./minor-components/WorkFlow"

function App() {
  return (
    <div id="#App" className="transition-colors duration-400 dark:bg-gray-950 bg-white min-h-screen max-w-screen overflow-x-hidden">
      <div className="absolute pointer-events-none select-none h-screen w-full overflow-hidden bg-black">
        <img src={assets.background} alt="" className="opacity-40" />
      </div>
      {/* header and sidebar go here  */}
      <Sidebar />
      <Header />
      <Hero />
      <Store />
      <Growth />
      <Work />

      <WorkFlow />
      <Reviews />
      <Contact />
      {/* foooter */}
      <Footer />
    </div>
  )
}

export default App
