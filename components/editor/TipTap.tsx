"use client"

import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Toolbar from "./Toolbar"
import Underline from "@tiptap/extension-underline"


const TipTap = ( {onChange, content}: any) => {
  const handleChange = (newContent: string) => {
    onChange(newContent)
  }

  const editor = useEditor({
    extensions: [
        StarterKit,
        Underline,
    ],
    editorProps: {
        attributes: {
            class:
               "bg-white flex flex-col px-4 py-3 justify-start border-b border-r border-l border-t border-gray-400 text-gray-900 items-start w-full gap-3 font-medium text-[16px] pt-4 rounded-bl-md rounded-br-md rounded-tl-md rounded-tr-md outline-none"
        },
    },

    onUpdate: ({ editor }) => {
        handleChange(editor.getHTML())
    }
  })

  return (
    <div className="w-full px-4">
        <Toolbar editor={editor} content={content} />
        <EditorContent style={{ whiteSpace: "pre-line" }} editor={editor} />
    </div>
  )
}

export default TipTap