import Navbar from "./NavBar.jsx"
import Footer from "./Footer.jsx"

const App = () => {
  return (
    <div>
      <Navbar />
      <main className="page-content">
        <section style={{maxWidth:900,margin:'40px auto',padding:24,background:'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))',borderRadius:12,color:'#dbeafe'}}>
          <h1 style={{marginBottom:8}}>Welcome to SparkStack</h1>
          <p style={{opacity:0.9,lineHeight:1.6}}>A lightweight prototype theme focused on clarity and quick setup. Use the nav to explore, or customize further.</p>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App