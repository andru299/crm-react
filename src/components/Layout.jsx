import { Outlet, Link, useLocation } from "react-router-dom";
function Layout() {
  return (
    <div className="md:flex md:min-h-screen">
      <aside className="md:w-1/4 bg-blue-900 px-5 py-10">
        <h2 className="text-4xl font-black text-center text-white">CRM-Clientes</h2>
        <nav className="mt-10">
           
        </nav>
      </aside>
    </div>
  )
}

export default Layout