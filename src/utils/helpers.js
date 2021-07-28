export const searchObject = (job, searchTerm) => {

  if (searchTerm === '') return true

  searchTerm = searchTerm.toLowerCase()

  const searchArray = []

  //FLATTEN NESTED OBJECT PROPERTIES
  const objValues = Object.values(job)
  objValues.forEach(element => {
    if (typeof element !== 'object' ) {
      searchArray.push(element.toLowerCase()) 
    } else {
      for (const prop in element) {
          searchArray.push(element[prop].toLowerCase())
      }
    }
  })

  //REMOVE 'job' AND 'company' __typenames
  const filteredArray1 = searchArray.filter(element => element !== 'job')
  const filteredArray2 = filteredArray1.filter(element => element !== 'company')

  //SPLIT ALL STRINGS INTO SUBSTRINGS
  const spreadArray = []
  filteredArray2.forEach(element => {
    const split = element.split(' ')
    spreadArray.push(...split)
  })

  //RETURN BOOLEAN ON SEARCHTERM
  if (spreadArray.includes(searchTerm)) {
    return true
  } else {
    return false
  }
}

export const searchLocation = (job, searchTerm) => {
  if (searchTerm === '') return true
  searchTerm = searchTerm.toLowerCase()
  const location = job.companyByCompany.companyLocation.toLowerCase()
  if (searchTerm === location) {
    return true
  } else {
    return false
  }
}

export const searchFullTime = (job, bool) => {
  if (job.contract !== 'Full Time' && bool) {
    return false
  } else {
    return true
}  
}
