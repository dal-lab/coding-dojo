export default (participant, completion) => {
  const completionObj = completion.reduce((acc, crr) => {
    acc[crr] ? acc[crr] += 1 : acc[crr] = 1 
    return acc;
  }, {})
  let result = '';
  participant.forEach( name => {
    if(completionObj[name]) completionObj[name] -=1 
    else result = name; 
  })

  return result;
}