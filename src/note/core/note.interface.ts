export type Note = {
    id: string;
    title: string;
    content: string;
    cssSelector: string;
    link: string;
}

export interface CreateNoteRequest {
    title: string
    content: string;
    cssSelector: string;
    link: string;
}

export interface NoteService {
    createNote: (note: CreateNoteRequest, accessToken: string) => Promise<void>;
    deleteNote: (noteId: string, accessToken: string) => Promise<void>;
    getUserNotes: (accessToken: string) => Promise<Note[]>;
}


