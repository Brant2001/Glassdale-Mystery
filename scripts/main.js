import { getCriminals } from './criminals/CriminalProvider.js'
import { CriminalList } from './criminals/CriminalList.js'
import { getConvictions } from './convictions/ConvictionProvider.js'
import ConvictionSelect from './convictions/ConvictionSelect.js'

getConvictions().then(
   () => ConvictionSelect()
)

getCriminals().then(
   () => CriminalList()
)


