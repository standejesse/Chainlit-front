import { v4 as uuidv4 } from "uuid";
import { ArrowLeftFromLine, File, FileText, FolderOpen, LucideTrafficCone, Search, Globe2, ChevronRight, ChevronUp } from 'lucide-react';
import Logo from '../assets/logo_dark.png'

import {
  useChatInteract,
  useChatMessages,
  IStep,
} from "@chainlit/react-client";
import { useState } from "react";

export function Playground() {
  const [inputValue, setInputValue] = useState("");
  const { sendMessage } = useChatInteract();
  const { messages } = useChatMessages();

  const handleSendMessage = () => {
    const content = inputValue.trim();
    if (content) {
      const message = {
        name: "user",
        type: "user_message" as const,
        output: content,
      };
      sendMessage(message, []);
      setInputValue("");
    }
  };

  const renderMessage = (message: IStep) => {
    const dateOptions: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
    };
    const date = new Date(message.createdAt).toLocaleTimeString(
      undefined,
      dateOptions
    );
    return (
      <div key={message.id} className="flex items-start space-x-2">
        <div className="w-20 text-sm text-green-500">{message.name}</div>
        <div className="flex-1 border rounded-lg p-2">
          <p className="text-black dark:text-white">{message.output}</p>
          <small className="text-xs text-gray-500">{date}</small>
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-customGray text-white">

      <aside className="w-57 p-4 bg-navbar flex flex-col items-start">
        <div className="w-full flex justify-end mb-10">
            <ArrowLeftFromLine className="w-4 h-4 " />
        </div>
      <img src={Logo} alt="Logo" className="mb-4" width={150} />

        <nav className="mt-6 flex flex-col gap-4 w-full">
          <a href="#" className="flex text-gray-300 hover:text-white w-full gap-14">
          <div className="flex">
            <Search name="search" className="w-5 h-5 mr-2" />
            <p>Search</p>
          </div>
          </a>
          <a href="#" className="flex items-center justify-between text-gray-300 hover:text-white w-full">
            <div className="flex items-center">
                <FolderOpen name="folder-open" className="w-5 h-5 mr-2" />
                <p>Pages</p> 
            </div>
            <ChevronRight name="chevron-right" className="w-3 h-3" />
          </a>

          <a href="#" className="flex text-gray-300 hover:text-white w-full gap-14">
            <div className="flex">
              <FileText name="file-text" className="w-5 h-5 mr-2" />
              <p>Documents</p>
            </div>
          </a>
          <a href="#" className="flex align-center items-center justify-between text-gray-300 hover:text-white w-full">
            <div className="flex align-center">
              <Globe2 name="globe" className="w-5 h-5 mr-2" />
              <p>Reports</p>
            </div>
            <ChevronRight name="chevron-right" className="w-3 h-3" />
          </a>
        </nav>

        <div className="mt-auto flex align-center items-center justify-between text-gray-300 hover:text-white w-full">
        <div className="flex align-center gap-2">
          <img src="//www.gravatar.com/avatar/9b28ffb4f5cb8ebce9c5d015c59e6873?s=140&amp;d=mm" alt="" className="w-6 h-6 rounded-full"/>
          <span>Jesse</span>
        </div>
          <ChevronUp name="chevron-up" className="w-3 h-3" />
        </div>
      </aside>

      <main className="flex-1 p-8">
        <div className="flex flex-col items-right m-16">
          <div className="flex gap-4">
            <img src="//www.gravatar.com/avatar/9b28ffb4f5cb8ebce9c5d015c59e6873?s=140&amp;d=mm" alt="" className="w-20 h-20 rounded-full"/>
            <div className="text-left">
            <h2 className="text-3xl font-semibold">Bem vindo à base de conhecimento Sinapses AI.</h2>
            <p className="text-xl mt-1">Jesse Maia</p>
            </div>
          </div>

          <div className="flex items-center mt-8 gap-64">
            <div className="flex flex-row items-center text-textBlue gap-4">
                <File name="file" className="w-24 h-24" />
              <div className="flex flex-col items-center">
              <span className="text-6xl font-bold">110</span>
              <span className="text-lg">Pages</span>
              </div>
            </div>
            <div className="flex flex-row items-center text-textBlue gap-4">
               <FileText name="file" className="w-24 h-24" />
              <div className="flex flex-col items-center">
              <span className="text-6xl font-bold">1</span>
              <span className="text-lg">Document</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

  );
}
