"use client"

import ChatArea from "@/components/Chat/ChatArea";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "react";
import { Chat } from "../types/Chat";
import Footer from "@/components/Chat/Footer";
import { v4 as uuidv4 } from 'uuid';
import SidebarChatButton from "@/components/Sidebar/SidebarChatButton";
import { openai } from "@/utils/openai";


const Page = () => {
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const [chatList, setChatList] = useState<Chat[]>([]);
  const [chatActiveId, setChatActiveId] = useState<string>('');
  const [chatActive, setChatActive] = useState<Chat>();
  const [AILoading, setAILoading] = useState(false);

  useEffect(() => {
    setChatActive(chatList.find(item => item.id === chatActiveId));
  }, [chatActiveId, chatList]);

  useEffect(() => {
    if (AILoading) getAIResponse();
  }, [AILoading]);

  const openSidebar = () => setSidebarOpened(true);
  const closeSidebar = () => setSidebarOpened(false);
  const getAIResponse = () => {
    setTimeout(() => {
      let chatListClone = [...chatList];
      let chatIndex = chatListClone.findIndex(item => item.id === chatActiveId);
      if (chatIndex > -1) {
        chatListClone[chatIndex].messages.push({
          id: uuidv4(),
          author: 'ai',
          body: 'Essa é a minha resposta :)'
        })
      }
      setChatList(chatListClone);
      setAILoading(false);
    }, 2000);
  }

  const handleClearConversation = () => {
    if (AILoading) return;

    setChatActiveId('');
    setChatList([]);
  }

  const handleNewChat = () => {
    if (AILoading) return

    setChatActiveId('');
    closeSidebar();
  }

  const handleSendMessage = (message: string) => {
    if (!chatActiveId) {
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

  const handleSelectChat = (id: string) => {
    if (AILoading) return;

    let item = chatList.find(item => item.id === id);
    if (item) setChatActiveId(item.id);
    closeSidebar();
  }

  const handleDeleteChat = (id: string) => {
    let chatListClone = [...chatList];
    let chatIndex = chatListClone.findIndex(item => item.id === id)
    chatListClone.splice(chatIndex, 1);
    setChatList(chatListClone);
    setChatActiveId('');
  }

  const handleEditChat = (id: string, newTitle: string) => {
    if (newTitle) {
      let chatListClone = [...chatList];
      let chatIndex = chatListClone.findIndex(item => item.id === id)
      chatListClone[chatIndex].title = newTitle;
      setChatList(chatListClone);
    }
  }

  const handleTestOpenAI = async () => {
    await openai.generate([
      {role: 'user', content: 'qual capital do brasil'}
    ]);
  }

  return (
    <main className="flex min-h-screen bg-ia-blue">
      <Sidebar
        open={sidebarOpened}
        onClose={closeSidebar}
        onClear={handleClearConversation}
        onNewChat={handleNewChat}
      >
        {chatList.map(item => (
          <SidebarChatButton
            key={item.id}
            chatItem={item}
            active={item.id === chatActiveId}
            onClick={handleSelectChat}
            onDelete={handleDeleteChat}
            onEdit={handleEditChat}
          />
        ))}
      </Sidebar>

      <section className="flex flex-col w-full">

        <Header
          openSidebarClick={openSidebar}
          title={chatActive ? chatActive.title : 'New chat'}
          newChatClick={handleNewChat}
        />

        <ChatArea
          chat={chatActive}
          loading={AILoading}
        />

          <button onClick={handleTestOpenAI}>Test OpenAI</button>

        <Footer
          disabled={AILoading}
          onSendMessage={handleSendMessage}
        />

      </section>

    </main>
  )
}

export default Page;