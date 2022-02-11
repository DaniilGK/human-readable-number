module.exports = function toReadable (number) {
    let numbers = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80:	"eighty",
        90: "ninety",
        100: "one hundred",
        200: "two hundred",
        300: "three hundred",
        400: "four hundred",
        500: "five hundred",
        600: "six hundred",
        700: "seven hundred",
        800: "eight hundred",
        900: "nine hundred",
        1000: "one thousand"
    }
        
    let pop = [number].join("").split("").splice(1, 2).join("");
          
        function maxHundread() {
            let first = [number].join("").split("");
            first.splice(1, 1, "0");
            return numbers[first.join("")] + " " + numbers[number.toString().split("").splice(1, 1)]
        }

        function minHundread() {
            let first = [number].join("").split("");
            first.splice(1, 2, "0");
            first.push("0")
            return numbers[first.join("")] + " " + numbers[number.toString().split("").splice(2, 3).join("")];
        }

        function teenNumbers() {
            let first = [number].join("").split("");
            first.splice(1, 2, "0");
            first.push("0")
            return numbers[first.join("")] + " " + numbers[number.toString().split("").splice(1, 3).join("")];
        }

        function maxTeens() {
            let first = [number].join("").split("");
            let second = [number].join("").split("");
            second.splice(2, 3, "0");
            first.splice(1, 2, "0");
            first.push("0");
                if([number].join("").split("")[2] == 0) {
                    return numbers[first.join("")] + " " + numbers[second.splice(1, 3).join("")] 
                }
            return numbers[first.join("")] + " " + numbers[second.splice(1, 3).join("")] + " " + numbers[number.toString().split("").splice(2, 2).join("")];
        }

        if(number > 20 && [number].join("").split("")[1] > 0 && number < 100) {
        return maxHundread() 
        }

        if(number > 100 && pop > 0 && pop < 10) {
        return minHundread()
        }

        if(number > 100 && pop > 9 && pop < 21) {
        return teenNumbers()
        }

        if(number > 100 && pop > 20 && number < 1000) {
        return maxTeens()
        }

return numbers[number];
}
