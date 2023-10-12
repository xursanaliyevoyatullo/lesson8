// components
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import BreadCrumbs from "../components/BreadCrumbs"
import ColorContainer from "../components/ColorContainer"

function MainLayout() {
  return (
    <>
      <Navbar/>
      <BreadCrumbs/> 
      <ColorContainer/>
      <main className="align-element py-8">
        <Outlet/>
      </main>
    </>
  )
} 

export default MainLayout