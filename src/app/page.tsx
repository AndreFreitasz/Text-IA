"use client"

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";


const Page = () => {
  const [sidebarOpened, setSidebarOpened] = useState(false);

  const openSidebar = () => setSidebarOpened(true);
  const closeSidebar = () => setSidebarOpened(false);

  const handleClearConversation = () => {

  }

  const handleNewChat = () => {

  }

  return (
    <main className="flex min-h-screen bg-ia-blue">
      <Sidebar
        open={sidebarOpened}
        onClose={closeSidebar}
        onClear={handleClearConversation}
        onNewChat={handleNewChat}
      >
        ...
      </Sidebar>

      <section className="flex flex-col w-full">
        
        <Header 
          openSidebarClick={openSidebar}
          title={` bla bla`}
          newChatClick={handleNewChat} 
        />

      </section>

    </main>
  )
}

export default Page;