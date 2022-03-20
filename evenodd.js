const isEven = (num) => {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
};

// long way to accomplish this but do not use this way!!
const isEvenSecondWay = (num) => {
    let even = true;

    for (let i = 0; i < num; i++) {
        even = !even;
    }

    return even;
}