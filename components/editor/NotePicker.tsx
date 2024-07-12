"use client"

import TipTap from "./TipTap"
import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

const NotePicker = () => {
  const [content, setContent] = useState<String>('')
  const handleContentChange = (reason:any) => {
    setContent(reason)
  }

  const handleSubmit = (e:any) => {
    e.preventDefault()
    const data = {
      id: uuidv4(),
      content: content,
    }

    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl w-full grid place-items-center mx-auto pt-10 mb-10">
        <div className="">
        </div>
        <TipTap
           content={content}
           onChange={(newContent: string) => handleContentChange(newContent)}
        />
    </form>
  )
}

export default NotePicker