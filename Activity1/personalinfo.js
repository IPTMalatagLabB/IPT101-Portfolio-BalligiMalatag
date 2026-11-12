let stud_name = "Malatag, Balligi M."
let stud_id = "2026-6354"
let year_lvl = "II"
let program = "Information Technology"

const courses = [
    { course: "Science Technology and Society", score: 92 },
    { course: "Networking 1", score: 89 },
    { course: "Event-Driven Programming", score: 90 },
    { course: "Integrative Programming and Technologies", score: 95 },
    { course: "Application Development and Emerging Technologies", score: 96 },
    { course: "Pathfit 2", score: 88 },
    { course: "Arts Appreciation", score: 92 }
];
let GWA = Math.round((courses[0].score + courses[1].score + courses[2].score + courses[3].score + courses[4].score + courses[5].score + courses[6].score) / 7)


let letterGrade;
if (GWA >= 98) {
    letterGrade = "A";
}else if (GWA >= 94) {
    letterGrade = "A-";
}else if (GWA >= 90) {
    letterGrade = "B+";
}else if (GWA >= 86) {
    letterGrade = "B";
}else if (GWA >= 83) {
    letterGrade = "B-";
}else if (GWA >= 80) {
    letterGrade = "C+";
}else if (GWA >= 77) {
    letterGrade = "C";
}else if (GWA >= 73) {
    letterGrade = "D";
}else if (GWA <= 72) {
    letterGrade = "F";
}

console.log("Student Name: " + stud_name)
console.log("Student ID: " + stud_id)
console.log("Year Level: " + year_lvl)
console.log("Program: " + program)
console.log("\n=== Courses Enrolled ===")
console.log(courses[0].course + "\n" + courses[1].course + "\n" + courses[2].course + "\n" + courses[3].course + "\n" + courses[4].course + "\n" + courses[5].course + "\n" + courses[6].course)
console.log("\nGWA: " + GWA + "\t\tLetter Grade: " + letterGrade)

