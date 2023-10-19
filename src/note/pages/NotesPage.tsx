import React, { useEffect, useState } from 'react'
import repository from '~common/repository';
import type { Note } from '~note/core/note.interface';
import noteService from '~note/core/noteService';

const NotesPage = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [accessToken, setAccessToken] = useState<string>();

  const getNotes = async () => {
    try {
      const notes = await noteService.getUserNotes(accessToken);
      setNotes(notes);
    } catch (err) {
      console.error("Error getting notes:", err)
    }
  }

  const deleteNote = async (noteId: string) => {
    await noteService.deleteNote(noteId, accessToken);
    await getNotes();
  }

  const getAndSetAccessToken = async () => {
    const token = await repository.get("accessToken");
    setAccessToken(token);
  }

  const handleLinkClick = async (cssSelector: string) => {
    await repository.set("lastCssSelector", cssSelector)
  }

  useEffect(() => {
    getAndSetAccessToken()

    if (accessToken) {
      getNotes();
    }

  }, [accessToken])

  return (
    <div className='notes-page'>
      <h1>Your notes</h1>

      <div className='notes-container'>
        {notes.map(note =>
          <div key={note.id} className='note'>
            <div className='header'>
              <img src={`http://www.google.com/s2/favicons?domain=${note.link}`}></img>
              <h3><a onClick={() => handleLinkClick(note.cssSelector)} target='_blank' href={note.link}>{note.title}</a></h3>
            </div>
            <p title={note.content}>{note.content.substring(0, 60) + '...'}</p>
            <button onClick={() => deleteNote(note.id)}>Delete</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default NotesPage