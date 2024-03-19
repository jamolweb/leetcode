const reverse = (int) => {
    const reversed = int.toString().split("").reverse().join("")

    Number(reversed)

    return parseInt(reversed) * Math.sign(int)
};

console.log(reverse(512));