function gradeBook (grade1, grade2, grade3) {
  var average = ((grade1 + grade2 + grade3) / 3)
  var grade1 = grade1 || 50
  var grade2 = grade2 || 50
  var grade3 = grade3 || 50

  if (average < 0) {
    return 'no grade'
  }
  if (average < 60) return 'F'
  if (average < 70) return 'D'
  if (average < 80) return 'C'

  if (average < 90) return 'B'
  if (average <= 100) return 'A'
}
