
export function isGreaterThan18YearsOld(day, month, year, dob): boolean {
    return new Date(year - 18, month, day) >= dob;
}

export function isLessThan96YearsOld(day, month, year, dob): boolean {
    return new Date(year - 96, month, day) <= dob;
}

export function isMajor(day, month, year, dob): boolean {
    return isGreaterThan18YearsOld(day, month, year, dob);
}

export function isSenior(day, month, year, dob): boolean {
    return new Date(year - 60, month, day) >= dob;
}
