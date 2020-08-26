const transpose = function (matrix) {

    const resultArray = []

    for (let row = 0; row < matrix[0].length; row++) {
        let tempArray = [];
        for (let col = 0; col < matrix.length; col++) {
            tempArray.push(matrix[col][row]);
        }
        resultArray.push(tempArray);
    }
    return resultArray;

};

const wordSearch = (letters, word) => {
    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    const horizontalJoin = letters.map(ls => ls.join(''))//"LOVEQUAL"
    for (l of horizontalJoin) {
        if (l.includes(word)) {  // love === lovequal => false
            return true
        }
    }
    for(l of verticalJoin){
        if(l.includes(word)){
            return true
        }
    }
    return false;
}
module.exports = wordSearch;