const testStudentScore = (testScore)=>{
    let result = testScore.filter((num)=> num >= 70);
    return result; 
}
const addFive = (testScore)=> {
    let result = testScore.map((num)=> num + 5);
    return result;
}

const getSquare = (elements) => {
    let answer = elements.map((num)=> num * num);
    return answer;
}
function distributeBook (arrOfBooks, nameOfStudents) {
    const newObj = [];
    
    for(let count = 0; count < arrOfBooks.length; count++) {
        let objectOfStudents = {
            name: nameOfStudents[count],
            nameOfBook: arrOfBooks[count]
        }
        newObj.push(objectOfStudents);
    }
    return newObj;
}
let timeGiven = ["9:00 AM",
    "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"];
const getAfternoonTime = (timeGiven) => {
    const afternooonTime = timeGiven.filter((num) => num.includes("PM"));
    return afternooonTime; 
}

    let ans = getAfternoonTime(timeGiven)
console.log(ans)
module.exports = {testStudentScore, addFive, getSquare, distributeBook, getAfternoonTime};