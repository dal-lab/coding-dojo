export default (participant, completion) => {
  const completionObj = completion.reduce((acc, crr) => {
    acc[crr] ? acc[crr] += 1 : acc[crr] = 1 
    return acc;
  }, {})
  let loserIdx = 0;
  participant.some((name,i) => {
    if(completionObj[name]){
      completion[name] -= 1;
      return false;
    }
    else {
      loserIdx = i;
      return true;
    } 
  })

  return participant[loserIdx]; 
}