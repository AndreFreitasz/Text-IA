"use client"

import ChatArea from "@/components/Chat/ChatArea";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import { Chat } from "../types/Chat";
import Footer from "@/components/Chat/Footer";


const Page = () => {
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const [AILoading, setAILoading] = useState(false);
  const [chatActive, setChatActive] = useState<Chat>({
    id: '123',
    title: 'Wethever',
    messages: [
      {
        id: '99',
        author: 'me',
        body: 'Tudo bem?',
      },
      {
        id: '100',
        author: 'ai',
        body: 'Tudo sim, e você?',
      }
    ]
  });

  const openSidebar = () => setSidebarOpened(true);
  const closeSidebar = () => setSidebarOpened(false);

  const handleClearConversation = () => {

  }

  const handleNewChat = () => {

  }

  const handleSendMessage = () => {

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
          title={`Title`}
          newChatClick={handleNewChat}
        />

        <ChatArea
          chat={chatActive}
        />

        <Footer
          disabled={AILoading}
          onSendMessage={handleSendMessage}
        />

      </section>

    </main>
  )
}

export default Page;