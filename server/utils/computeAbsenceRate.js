const computeAbsenceRate = (absence) => {
    const absenceRecordsCount = Number(absence.absence_count)
    const attendanceRecordsCount = Number(absence.attendance_count)

    if (absenceRecordsCount + attendanceRecordsCount === 0) {
        return null
    }

    const absenceRate =
        absenceRecordsCount / (absenceRecordsCount + attendanceRecordsCount)
    return absenceRate
}

export default computeAbsenceRate
