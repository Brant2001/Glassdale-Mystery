import { getCriminals } from './criminals/CriminalProvider.js'
import { CriminalList } from './criminals/CriminalList.js'
import { getConvictions } from './convictions/ConvictionProvider.js'
import { ConvictionSelect } from './convictions/ConvictionSelect.js'
import { DisplayNotesButton } from './notes/DisplayNotesButton.js'
import { DisplayNoteFormButton } from './notes/DisplayNoteFormButton.js'
import { NoteForm } from './notes/NoteForm.js'
import { NotesList } from './notes/NoteList.js'
import './criminals/KnownAssociatesDialog.js'
import { getNotes } from './notes/NoteDataProvider.js'

getConvictions().then(ConvictionSelect)
getCriminals().then(getNotes).then(CriminalList).then(NotesList)

DisplayNoteFormButton()
DisplayNotesButton()
NoteForm()

