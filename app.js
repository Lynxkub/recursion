function product(arr) {
    if(arr.length === 0) return 1
    return(arr[0] * product(arr.slice(1)))
}

const words = ['hello', 'hi', 'hola']
function longest(arr) {
    let currWord = 0
    if(arr.length === 0) return currWord
    currWord = arr[0].length
    return Math.max(currWord , longest(arr.slice(1)));
}

function everyOther(str , idx = 0) {
    let answer = '';
    if(idx > str.length) return ""
    return(answer.concat(str[idx] + everyOther(str , idx + 2)))
}

function isPalindrome(str) {
    if(str.length === 1) return true;
    if(str[0] === str[str.length -1]){
        
       
        return isPalindrome(str.slice(1,-1))
    }
    return false;
}

const animals = ['duck', 'cat', 'pony']

function findIndex(arr , str , idx= 0) {
    if(arr.length === 0) return -1;
    if(arr[0] === str) {
        return idx
    }
   
    return findIndex(arr.slice(1) , str , idx + 1)
}

function revString(str) {
    if(str.length === 0 ) return ""
    let letter = str[str.length -1]
    return letter + revString(str.slice(0 , -1));
}

let nestedObj = {
    firstName: "Lester",
    favoriteNumber: 22,
    moreData: {
      lastName: "Testowitz"
    },
    funFacts: {
      moreStuff: {
        anotherNumber: 100,
        deeplyNestedString: {
          almostThere: {
            success: "you made it!"
          }
        }
      },
      favoriteString: "nice!"
    }
  };

  function gatherString(obj) {
      let answer = []
     for(let key in obj) {
         if(typeof obj[key] === 'string') answer.push(obj[key])
         if(typeof obj[key] === 'object') answer.push(...gatherString(obj[key]))
     }
     return answer

  }

