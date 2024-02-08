// What's SOLID meaning?
// In software engineering, SOLID is a mnemonic acronym for five design principles intended to make software designs more understandable, flexible, and maintainable. The principles are a subset of many principles promoted by American software engineer and instructor Robert C. Martin, first introduced in his 2000 paper Design Principles and Design Patterns.

// 1. Single Responsibility (SRP)
// ! There should never be more than one reason for a class to change.
// ! Every class should have only one responsibility.

class Note {
  private static count = 0
  public readonly id: number
  public text: string

  constructor(text: string) {
    this.id = Note.count
    this.text = text

    Note.count += 1
  }
}

class Setting {
  private password: string | null
  private theme: 'LIGHT' | 'DARK'
  private fontSize: number

  constructor() {
    this.password = null
    this.theme = 'LIGHT'
    this.fontSize = 14
  }

  private validatePassword(password: string): boolean {
    if (password.length < 8) {
      return false
    } else if (password.length > 32) {
      return false
    } else {
      return true
    }
  }

  public changePassword(newPassword: string): void {
    if (this.validatePassword(newPassword)) {
      this.password = newPassword
    }
  }

  public toggleTheme(): void {
    if (this.theme === 'LIGHT') {
      this.theme = 'DARK'
    } else {
      this.theme = 'LIGHT'
    }
  }

  public changeFontSize(newFontSize: number): void {
    if (newFontSize < 8) {
      this.fontSize = 8
    } else if (newFontSize > 60) {
      this.fontSize = 60
    } else {
      this.fontSize = Math.floor(newFontSize)
    }
  }
}

class Notebook {
  public notes: Note[]
  public readonly setting: Setting

  constructor() {
    this.notes = []
    this.setting = new Setting()
  }

  public getNoteById(noteId: number): Note | undefined {
    return this.notes.find(({ id }) => id === noteId)
  }

  public createNewNote(newNote: Note): void {
    this.notes.push(newNote)
  }

  public deleteAllNotes(): void {
    this.notes.length = 0
  }

  public deleteNote(noteId: number): void {
    const targetNote = this.getNoteById(noteId)

    if (targetNote) {
      const targetNoteIndex = this.notes.indexOf(targetNote)
      this.notes.splice(targetNoteIndex, 1)
    }
  }

  public editNote(noteId: number, newText: string): void {
    const updatedNotes = this.notes.map<Note>(note =>
      note.id == noteId
        ? {
            id: noteId,
            text: newText,
          }
        : note
    )

    this.notes = updatedNotes
  }

  public printAllNotes() {
    this.notes.forEach(note => console.log(note))
  }
}

const notebook = new Notebook()
notebook.createNewNote(new Note('one'))
notebook.printAllNotes()

notebook.editNote(0, 'one 1')
notebook.printAllNotes()

notebook.createNewNote(new Note('two'))
notebook.printAllNotes()
