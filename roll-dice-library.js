let roll = (function () {
    /**
    * Randomly shuffle an array
    * https://stackoverflow.com/a/2450976/1293256
    * @param  {Array} array The array to shuffle
    * @return {Array}       The shuffled array
    */
    function shuffle(array) {

        let currentIndex = array.length;
        let temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;

    }

    /**
     * Generate an array with the sides in a dice.
     * @param {Number} int Number of sides.
     * @return {Array} nums Sides of the dice.
    */
    function getSidesArr(sides) {
        let result = [];

        if (sides > 0 && Number.isInteger(sides)) {
            for (let i = 1; i <= sides; i++) {
                result.push(i);
            }
        }

        return result;
    }

    /**
     * Roll a dice with the given number of sides.
     * @param {Number} int Number of sides.
     * @return {Number} winner.
    */
    function rollDice(sides) {
        let sidesArr = getSidesArr(sides);
        shuffle(sidesArr);
        return sidesArr[0];
    }

    /**
     * Roll a 2 sided dice.
    */
    function d2() {
        return rollDice(2);
    }

    /**
     * Roll a 4 sided dice.
    */
    function d4() {
        return rollDice(4);
    }

    /**
     * Roll a 6 sided dice.
    */
    function d6() {
        return rollDice(6);
    }

    /**
     * Roll a 8 sided dice.
    */
    function d8() {
        return rollDice(8);
    }

    /**
     * Roll a 10 sided dice.
    */
    function d10() {
        return rollDice(10);
    }

    /**
     * Roll a 12 sided dice.
    */
    function d12() {
        return rollDice(12);
    }

    /**
     * Roll a 20 sided dice.
    */
    function d20() {
        return rollDice(20);
    }


    return { d2, d4, d6, d8, d10, d12, d20 };
})();
