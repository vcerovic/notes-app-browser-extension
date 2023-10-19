import { sendToBackground } from "@plasmohq/messaging";
import { useEffect, useState } from "react";
import { ACCESS_TOKEN, CREATE_NOTE_HANDLER, CREATE_NOTE_SHORTCUT_KEY } from "~common/constants";
import repository from "~common/repository";
import { getSelectedNode, getUniqueCssSelector } from "~utils/SelectorUtils";

const NoteCreator = () => {
    const [accessToken, setAccessToken] = useState<string>();

    const handleKeyPress = (event: KeyboardEvent) => {
        if (accessToken && isShortcutPressed(event)) {
            const noteContent = window.getSelection()?.toString();

            if (noteContent) {
                createNote(noteContent)
            }
        }
    }

    const isShortcutPressed = (event: KeyboardEvent): boolean => {
        return (event.ctrlKey || event.metaKey) && event.key === CREATE_NOTE_SHORTCUT_KEY;
    }


    const createNote = async (noteContent: string) => {
        const selectedElement = getSelectedNode();
        const cssSelector = getUniqueCssSelector(selectedElement);
        const link = window.location.href;
        const title = prompt("Enter a note title");

        if (!title) return;

        try {
            const resp = await sendToBackground({
                name: CREATE_NOTE_HANDLER,
                body: {
                    note: {
                        title: title,
                        content: noteContent,
                        cssSelector: cssSelector,
                        link: link
                    },
                    accessToken: accessToken
                }
            })

            alert(resp)
        } catch (error) {
            alert(error);
        }
    }

    const getAccessToken = async () => {
        const token = await repository.get<string>(ACCESS_TOKEN);
        setAccessToken(token);
    }

    useEffect(() => {
        if (!accessToken) getAccessToken();

        document.addEventListener("keydown", handleKeyPress);
    }, [accessToken])

    return (
        <div></div>
    )
}

export default NoteCreator