function defaultInterpolation(substrings, ...args) {
  return createInterpolatedString(substrings, ...args)
}

function createInterpolatedString(substrings, ...args) {
  return shiftBetween(substrings, args).join('')
}

function shiftBetween(a, b) {
  if (a.length === b.length + 1) {
    const result = []
    let indexA = 0
    let indexB = 0
    while (indexB < b.length) {
      result.push(a[indexA])
      indexA++
      result.push(b[indexB])
      indexB++
    }
    result.push(a[a.length - 1])
    return result
  }
}

{
  const animalA = 'dog'
  const animalB = 'cat'
  const string = defaultInterpolation`The ${ animalA } chases the ${ animalB }.`
  console.log(string)
}


function capitalizeInterpolationValues(substrings, ...args) {
  return createInterpolatedString(substrings, ...args.map(value => String(value).toUpperCase()))
}

{
  const animalA = 'dog'
  const animalB = 'cat'
  const string = capitalizeInterpolationValues`The ${ animalA } chases the ${ animalB }.`
  console.log(string)
}
