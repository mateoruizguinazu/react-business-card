import About from "./components/About"
import Info from "./components/Info"
import Interest from "./components/Interest"
import Footer from "./components/Footer"

export default function App() {
  return (
    <>
      <About />
      <main>
        <Info />
        <Interest />
      </main>
      <Footer />
    </>
  )
}