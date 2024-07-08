"use client"

import Feed from "@/components/Feed"
import { useTheme } from "styled-components"

const Home = () => {
  const theme = useTheme()

  return (
    <main className="w-full flex-center flex-col">
        <h1 className={theme.tag === 'light' ? "head_text text-black":"head_text text-white"}>
            Discover & share 
            <br className="max-md:hidden"/>
            <span className="orange_gradient text-center">AI-Powered Prompts</span>
        </h1>
        <Feed />
    </main>
  )
}

export default Home