import Footer from "./components/Footer"
import Header from "./components/Header"
import "bootstrap/dist/css/bootstrap.min.css"
import Sidebar from "./components/Sidebar"
import "./App.css"
import Cardlist from "./components/Cardlist"
import Createpost from "./Createpost"
import { useState } from "react"
import PostListProvider from "./store/post-list-store"

function App() {
  const [sidebarclick, nextsidebarclick] = useState("Home");


  return ( <PostListProvider>

    <div className="sidebar-container">
      <Sidebar sidebarclick= {sidebarclick} nextsidebarclick={nextsidebarclick}></Sidebar>
    
    <div className="header-footer-class">
      <Header></Header>
      {sidebarclick === "Home" ?(<Cardlist></Cardlist>):(<Createpost></Createpost>)}
 

      <Footer></Footer>
      </div>
      </div>

      </PostListProvider>
  )
}

export default App
