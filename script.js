function calculateAge() {
    const birthdate = document.getElementById('birthdate').value;
    const ageElement = document.getElementById('age');
    const nextBirthdayElement = document.getElementById('next-birthday');

    if (!birthdate) {
        ageElement.textContent = 'Please enter your birthdate.';
        nextBirthdayElement.textContent = '';
        return;
    }

    const today = new Date();
    const birthDate = new Date(birthdate);

    // Check if the birthdate is in the future
    if (birthDate > today) {
        ageElement.textContent = 'Invalid date! Birthdate cannot be in the future.';
        nextBirthdayElement.textContent = '';
        return;
    }

    // Calculate age in years, months, and days
    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDifference = today.getMonth() - birthDate.getMonth();
    let dayDifference = today.getDate() - birthDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
        monthDifference += 12;
    }

    if (dayDifference < 0) {
        const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, birthDate.getDate());
        dayDifference = Math.floor((today - lastMonth) / (1000 * 60 * 60 * 24));
        monthDifference--;
    }

    ageElement.textContent = `Your age is ${age} years, ${monthDifference} months, and ${dayDifference} days.`;

    // Calculate next birthday
    const nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    if (nextBirthday < today) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    const daysUntilNextBirthday = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));
    nextBirthdayElement.textContent = `Your next birthday is in ${daysUntilNextBirthday} days.`;
}