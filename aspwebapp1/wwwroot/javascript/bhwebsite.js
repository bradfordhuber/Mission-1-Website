////document.getElementById("gradebtn").addEventListener("click", function () {
////    alert("this worked");
////})

$("#gradebtn").click(function () {
    let assignments = $('#assignments').val();
    let group = $('#group').val();
    let quiz = $('#quiz').val();
    let exams = $('#exams').val();
    let intex = $('#intex').val();

    let FinalNumberGrade = (assignments * .55) + (group * .05) + (quiz * .1) + (exams * .2) + (intex * .1);
    let FinalLetterGrade = null;

    if (FinalNumberGrade >= 94) {
        FinalLetterGrade = "A";
    } else if (FinalNumberGrade >= 90) {
        FinalLetterGrade = "A-";
    } else if (FinalNumberGrade >= 87) {
        FinalLetterGrade = "B+";
    } else if (FinalNumberGrade >= 84) {
        FinalLetterGrade = "B";
    } else if (FinalNumberGrade >= 80) {
        FinalLetterGrade = "B-";
    } else if (FinalNumberGrade >= 77) {
        FinalLetterGrade = "C+";
    } else if (FinalNumberGrade >= 74) {
        FinalLetterGrade = "C";
    } else if (FinalNumberGrade >= 70) {
        FinalLetterGrade = "C-";
    } else if (FinalNumberGrade >= 67) {
        FinalLetterGrade = "D+";
    } else if (FinalNumberGrade >= 64) {
        FinalLetterGrade = "D";
    } else if (FinalNumberGrade >= 60) {
        FinalLetterGrade = "D-";
    } else {
        FinalLetterGrade = "E";
    }

    $('#output').html(FinalLetterGrade + ", " + FinalNumberGrade + "%");

    
})
