import type { PlasmoMessaging } from "@plasmohq/messaging"
import noteService from "~note/core/noteService"

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
    await noteService.createNote(req.body.note, req.body.accessToken)
    res.send("Successfully created a new note")
}

export default handler