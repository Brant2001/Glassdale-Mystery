import { getCriminals } from './criminals/CriminalProvider.js'
import { CriminalList } from './criminals/CriminalList.js'
import { getConvictions } from './convictions/ConvictionProvider.js'
import { ConvictionSelect } from './convictions/ConvictionSelect.js'
import { DisplayNotesButton } from './notes/DisplayNotesButton.js'
import { DisplayNoteFormButton } from './notes/DisplayNoteFormButton.js'
import { NoteForm } from './notes/NoteForm.js'
import './notes/NoteList.js'
import './criminals/KnownAssociatesDialog.js'

getConvictions().then(ConvictionSelect)
getCriminals().then(CriminalList)

DisplayNoteFormButton()
DisplayNotesButton()
NoteForm()
