

// provide dob in this format: yyyy/mm/dd
function calcAge(dob) {
    var today = new Date();
    var birthDate = new Date(dob);
    var years = today.getFullYear() - birthDate.getFullYear();
    var months = today.getMonth() - birthDate.getMonth();
    var days = today.getDate() - birthDate.getDate();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
        years--;
    }
    if (days <= 0 ) {
        months--;
    }
    
    return {years, months, days, minutes, seconds};
}

module.exports = calcAge;