import { Editor } from "@tiptap/react"
import { Button } from "@/components/ui/button"
import {
    Bold,
    Strikethrough,
    Italic,
    List,
    ListOrdered,
    Heading2,
    Underline,
    Quote,
    Undo,
    Redo,
    Code,
} from "lucide-react"

type Props = {
    editor: Editor | null
    content: string
}

const Toolbar = ({ editor, content }: Props) => {
    if (!editor) {
        return null
    }
    return (
        <div className="px-1 py-1 mb-4 rounded-bl-md rounded-br-md rounded-tl-md rounded-tr-md flex justify-between items-start
    gap-[0.15rem] w-full flex-wrap border bg-blue-50"
        >
            <div className="flex justify-start items-center gap-[0.15rem] w-full flex-wrap">
                {/* {Bold} */}
                <Button
                    onClick={(e) => {
                        e.preventDefault()
                        editor.chain().focus().toggleBold().run()
                    }}
                    className={
                        editor.isActive("bold")
                            ? "bg-black text-white rounded-lg"
                            : "text-gray-900 bg-transparent"
                    }
                >
                    <Bold className="w-5 h-5" />
                </Button>
                {/* {Italic} */}
                <Button
                    onClick={(e) => {
                        e.preventDefault()
                        editor.chain().focus().toggleItalic().run()
                    }}
                    className={
                        editor.isActive("italic")
                            ? "bg-black text-white rounded-lg"
                            : "text-gray-900 bg-transparent"
                    }
                >
                    <Italic className="w-5 h-5" />
                </Button>
                <Button
                    onClick={(e) => {
                        e.preventDefault()
                        editor.chain().focus().toggleUnderline().run()
                    }}
                    className={
                        editor.isActive("underline")
                            ? "bg-black text-white rounded-lg"
                            : "text-gray-900 bg-transparent"
                    }
                >
                    <Underline className="w-5 h-5" />
                </Button>
                <Button
                    onClick={(e) => {
                        e.preventDefault()
                        editor.chain().focus().toggleStrike().run()
                    }}
                    className={
                        editor.isActive("strike")
                            ? "bg-black text-white rounded-lg"
                            : "text-gray-900 bg-transparent"
                    }
                >
                    <Strikethrough className="w-5 h-5" />
                </Button>
                <Button
                    onClick={(e) => {
                        e.preventDefault()
                        editor.chain().focus().toggleHeading({ level: 2 }).run()
                    }}
                    className={
                        editor.isActive("heading", { level: 2 })
                            ? "bg-black text-white rounded-lg"
                            : "text-gray-900 bg-transparent"
                    }
                >
                    <Heading2 className="w-5 h-5" />
                </Button>
                <Button
                    onClick={(e) => {
                        e.preventDefault()
                        editor.chain().focus().toggleBulletList().run()
                    }}
                    className={
                        editor.isActive("bulletList")
                            ? "bg-black text-white rounded-lg"
                            : "text-gray-900 bg-transparent"
                    }
                >
                    <List className="w-5 h-5" />
                </Button>
                <Button
                    onClick={(e) => {
                        e.preventDefault()
                        editor.chain().focus().toggleOrderedList().run()
                    }}
                    className={
                        editor.isActive("orderedList")
                            ? "bg-black text-white rounded-lg"
                            : "text-gray-900 bg-transparent"
                    }
                >
                    <ListOrdered className="w-5 h-5" />
                </Button>
                <Button
                    onClick={(e) => {
                        e.preventDefault()
                        editor.chain().focus().toggleBlockquote().run()
                    }}
                    className={
                        editor.isActive("blockquote")
                            ? "bg-black text-white rounded-lg"
                            : "text-gray-900 bg-transparent"
                    }
                >
                    <Quote className="w-5 h-5" />
                </Button>
                <Button
                    onClick={(e) => {
                        e.preventDefault()
                        editor.chain().focus().toggleCode().run()
                    }}
                    className={
                        editor.isActive("code")
                            ? "bg-black text-white rounded-lg"
                            : "text-gray-900 bg-transparent"
                    }
                >
                    <Code className="w-5 h-5" />
                </Button>
                <Button
                    onClick={(e) => {
                        e.preventDefault()
                        editor.chain().focus().undo().run()
                    }}
                    className={
                        editor.isActive("undo")
                            ? "bg-black text-white rounded-lg"
                            : "text-gray-900 bg-transparent hover:bg-black hover:text-white p-1 hover:rounded-lg"
                    }
                >
                    <Undo className="w-5 h-5" />
                </Button>
                <Button
                    onClick={(e) => {
                        e.preventDefault()
                        editor.chain().focus().redo().run()
                    }}
                    className={
                        editor.isActive("redo")
                            ? "bg-black text-white rounded-lg"
                            : "text-gray-900 bg-transparent hover:bg-black hover:text-white p-1 hover:rounded-lg"
                    }
                >
                    <Redo className="w-5 h-5" />
                </Button>
            </div>

            {content && (
               <Button type="submit">
                Add
               </Button>
            )}
        </div>
    )
}

export default Toolbar