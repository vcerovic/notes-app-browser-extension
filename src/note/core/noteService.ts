import { API_ENDPOINTS } from "~common/endpoints";
import type { CreateNoteRequest, Note, NoteService } from "./note.interface";

const noteService: NoteService = {
    createNote: async function (note: CreateNoteRequest, accessToken: string): Promise<void> {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(note),
        };

        try {
            await fetch(API_ENDPOINTS.NOTE, requestOptions);
        } catch (error) {
            throw new Error("Couldn't create a new note.");
        }
    },
    deleteNote: async function (noteId: string, accessToken: string): Promise<void> {
        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
        };

        try {
            await fetch(API_ENDPOINTS.NOTE + '/' + noteId, requestOptions);
        } catch (error) {
            throw new Error("Couldn't delete a note");
        }
    },
    getUserNotes: async function (accessToken: string): Promise<Note[]> {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
        };

        try {
            const response = await fetch(API_ENDPOINTS.NOTE, requestOptions);
            return await response.json();
        } catch (error) {
            throw new Error("Couldn't fetch the notes");
        }
    }
}

export default noteService;