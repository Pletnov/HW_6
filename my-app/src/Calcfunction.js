function calculation(a, b, operation) {
    if (a === '' || b === '') {
        return "Enter both numbers.";
    }
    else if (operation === '') {
        return "Select a mathematical operation.";
    }
    else if (isNaN(a) || isNaN(b)) {
        return "The fields must contain numbers.";
    }
    else if (operation === '+') {
        return Number(a) + Number(b);
    }
    else if (operation === '-') {
        return Number(a) - Number(b);
    }
    else if (operation === '/' && Number(b) === 0) {
        return "You cannot divide by zero.";
    }
    else if (operation === '/') {
        return Number(a) / Number(b);
    }
    else if (operation === '*') {
        return Number(a) * Number(b);
    }
}

export default calculation;