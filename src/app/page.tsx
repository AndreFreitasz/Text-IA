"use client"

import ChatArea from "@/components/Chat/ChatArea";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "react";
import { Chat } from "../types/Chat";
import Footer from "@/components/Chat/Footer";
import { v4 as uuidv4 } from 'uuid';


const Page = () => {
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const [chatList, setChatList] = useState<Chat[]>([]);
  const [chatActiveId, setChatActiveId] = useState<string>('');
  const [chatActive, setChatActive] = useState<Chat>();
  const [AILoading, setAILoading] = useState(false);

  useEffect(() => {
    setChatActive(chatList.find(item => item.id === chatActiveId));
  }, [chatActiveId, chatList]);

  const openSidebar = () => setSidebarOpened(true);
  const closeSidebar = () => setSidebarOpened(false);

  const handleClearConversation = () => {
    if(AILoading) return;

    setChatActiveId('');
    setChatList([]);
  }

  const handleNewChat = () => {
    if(AILoading) return

    setChatActiveId('');
    closeSidebar();
  }

  const handleSendMessage = (message: string) => {
    if(!chatActiveId) {
      //Creating new chat
        let newChatId = uuidv4();
        setChatList([{
          id: newChatId,
          title: message,
          messages: [
            {
              id: uuidv4(), 
              author: 'me',
              body: message
            }
          ]
        }, ...chatList]);

        setChatActiveId(newChatId);

    } else {
      //Updating existing chat
      let chatListClone = [...chatList];
      let ChatIndex = chatListClone.findIndex(item => item.id === chatActiveId);
      chatListClone[ChatIndex].messages.push({
        id: uuidv4(),
        author: 'me',
        body: message
      });

      setChatList(chatListClone);
    }

    setAILoading(true);
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
          loading={AILoading}
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