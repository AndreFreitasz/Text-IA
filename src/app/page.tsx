"use client"

import Sidebar from "@/components/Sidebar";
import { useState } from "react";


const Page = () => {
  const [sidebarOpened, setSidebarOpened] = useState(false);

  const closeSidebar = () => {
    setSidebarOpened(false);
  }

  return (
    <main className="flex min-h-screen bg-ia-blue">
      <Sidebar
        open={sidebarOpened}
        onClose={closeSidebar}
      >
        
      </Sidebar>
      <section className="flex flex-col w-full">
        <button onClick={() => setSidebarOpened(true)}>
          Abrir Sidebar
        </button>
      </section>
    </main>
  )
}

export default Page;