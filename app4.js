const data = [12, 23, 34, 40, 50, 63, 73, 85, 99];

const findIndex = (num) => {
    for (let i = 0; i < data.length; i++) {
        if (data[i] === num) {
            console.log(`${num} found at index ${i}`);
        }
    }
};
