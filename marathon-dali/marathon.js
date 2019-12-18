export default (participant, completion) => {
  const completionObj = completion.reduce((acc, cur) => ({
    ...acc,
    [cur]: (acc[cur] || 0) + 1,
  }), {});

  let completionCount = completion.length; 

  return participant.reduce((acc, cur) => {
    return  acc['result'] ? acc
            : acc[cur] ? { ...acc, [cur]: acc[cur] -1} 
            : {'result': cur} 
  },completionObj).result;
}