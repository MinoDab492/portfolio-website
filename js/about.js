console.log("JavaScript Connected")

document.addEventListener('DOMContentLoaded', function() {
    function calculateAge(dateOfBirth) {
        const birthDate = new Date(dateOfBirth);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    function updateTime() {
        const options = {
            timeZone: 'America/Vancouver',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        };
        const formatter = new Intl.DateTimeFormat([], options);
        document.getElementById('current-time').textContent = formatter.format(new Date());
    }

    const dateOfBirth = '2008-12-12';
    document.getElementById('age').textContent = calculateAge(dateOfBirth);

    updateTime();
    setInterval(updateTime, 1000); // Update time every second
});