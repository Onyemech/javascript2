const { time } = require("console");
const{testStudentScore, addFive, getSquare, distributeBook} = require("./studentScore");
const { toExpression } = require("@babel/types");

test("that function returns numbers greater than 70", ()=> {
    const numberGiven = [50, 60, 70, 91, 48, 33, 22, 25, 96, 74];
    let result = testStudentScore(numberGiven);
    let answer = [70, 91, 96, 74];
    expect(result).toEqual(answer);
})

test("that function returns elements + 5", ()=>{
    const testScore = [85, 92, 78, 88, 95];
    let result = addFive(testScore);
    let answer = [90, 97, 83, 93, 100];
    expect(result).toEqual(answer);
})

test("that function rerturns square of elements",()=>{
    const elements = [2,4,6,8,10];
    let result = getSquare(elements);
    let answer = [4,16,36,64,100];
    expect(result).toEqual(answer);
})

test("that function returns expected output",()=>{
    const arrOfBooks = ["Shattered dreams","48 laws of power","The discplined trader","Trading psychology"];
    const nameOfStudents = ["Emilly", "Jack", "Sophia", "Daniel"];
    let result = distributeBook (arrOfBooks, nameOfStudents);
    let answer = [
        { name: 'Emilly', nameOfBook: 'Shattered dreams' },
        { name: 'Jack', nameOfBook: '48 laws of power' },
        { name: 'Sophia', nameOfBook: 'The discplined trader' },
        { name: 'Daniel', nameOfBook: 'Trading psychology' }
      ]
    expect(result).toEqual(answer);
})

test("that function returns afternooon classes",()=>{
    const timeGiven = ["9:00 AM",
        "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"];
    let result = getAfternoonTime(timeGiven);
    let answer = ["1:00 PM", "3:00 PM", "5:00 PM"];
    expect(result).toEqual(answer);
})