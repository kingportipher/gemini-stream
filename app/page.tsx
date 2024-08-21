import Image from "next/image";
import styles from "./page.module.css";
import { Send } from "lucide-react";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      { /* form element */}
      { RenderForm() }
      { /* RenderMessage */}

      </main>
  );

      function RenderForm() {
        return <form action="" 
        className="w-full flex flex-row gap-2 items-center h-full">
        
            <input type="text" placeholder="Ask something ..." 
            className="border-b border-dashed outline-none w-full px-4 py-2 text-[#0842A0] placeholder: text-[#0842099] text-right focus:placeholder-opacity-0" 
            />
            <button type="submit"> <Send /></button>
            { /* input element */}
            { /* button element */}
        </form>
      } 
    
    }

