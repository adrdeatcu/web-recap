function camelize(str) { //transforming formats like: "camel-case" in "camelCase" 
    let finalCamelize ="";
    let wordsForCamelize = str.split("-");
    let firstCamelizeWord = wordsForCamelize[0];
    finalCamelize += firstCamelizeWord;
    for(let i=1; i<wordsForCamelize.length ; i++) {
        let lowerCaseWord = wordsForCamelize[i].slice(1).toLowerCase();
        let newUpperFirstLetterWord = wordsForCamelize[i].charAt(0).toUpperCase();
        let finalWord = newUpperFirstLetterWord + lowerCaseWord;
        finalCamelize += finalWord;
    }
    console.log(finalCamelize);


}

function filterRange(arr, highest, lowest) { //returns an array with numbers between 2 values(highest and lowest)
    function checkRange(number) {
        if(number <= highest && number >= lowest) {
            return number;
        }
    }
    let filteredArr = arr.filter(checkRange);
    console.log(filteredArr);
}

function filterRangeInPlace(arr , lowest, highest) { //modfies the array by removing the numbers outside of the interval
    for(let i=0; i<=arr.length -1; i++) {
        if(arr[i] <= lowest || arr[i] >= highest) {
            arr.splice(i,1);
            i--;
        }
    }
    console.log(arr);
}

function copySorted(arr) { //sorting an array without modifying the original one
    let sortedArr = arr.toSorted();
    console.log(sortedArr);
}




camelize("egal-legal-penal");
filterRange([1,2,6,8,24], 8, 2);
filterRangeInPlace([1,2,3,4,5,6,7,8], 3, 8);
copySorted(["abc" , "cdb" , "bca", "bba"]);