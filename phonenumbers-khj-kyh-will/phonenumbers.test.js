// const solution = (phonebook) => {
//     let flag = true
//     phonebook.sort((a, b) => a.length - b.length);
//     for(let i = 0; i < phonebook.length; i++) {
//         // for(let j = i + 1; j <phonebook.length; j++){
            
//         //     const searchTerm = phonebook[i];
//         //     const cmpTerm = phonebook[j];

//         //     if(cmpTerm.indexOf(searchTerm) !== -1) {
//         //         flag = false;
//         //         return flag;
//         //     }
//         // }

//         flag = phonebook.some((p,i) => {  
//             if (p !== phonebook[i]) {
//                 p.indexOf(phonebook[i])
//             }
//         })
//         return flag
//     }
//     return flag
// }

// test('solution', () => {
//     expect(solution(["119", "97674223", "1195524421"])).toBeFalsy();
//     expect(solution(["123", "456", "789"])).toBeTruthy();
//     expect(solution(["123","12","1235","567","88", "88888"])).toBeFalsy();
//     expect(solution(["897","22","78793","567","44","89"])).toBeFalsy();
// });

const testSome = (i, phonebook) => {
    phonebook.some((p) => p.indexOf(phonebook[i]) !== -1)
}

test('testSome', () => {
    expect(testSome(0, ["119", "97674223", "1195524421"])).toBeFalsy();
})
const findPrefix = (phonebook) =>{
    phonebook.every(p=>{

    })
}

