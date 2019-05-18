window.MakeArr = function () {
    var arr = [];
    var maxN = 0;
    var maxP = 0;
    var i = 0;
  
    
    

    var find = function (array, value) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] === value) return i;
        }

        return -1;
    }

    while (arr.length !== 50) {
        let randnam = ~~Math.floor(Math.random() * 100);
        if (find(arr, randnam) == -1) {
            arr[i] = randnam;
            i++;
        }
    }
function quick_Sort(origArray) {
	if (origArray.length <= 1) { 
		return origArray;
	} else {

		var left = [];
		var right = [];
		var newArray = [];
		var pivot = origArray.pop();
		var length = origArray.length;

		for (var i = 0; i < length; i++) {
			if (origArray[i] <= pivot) {
				left.push(origArray[i]);
			} else {
				right.push(origArray[i]);
			}
		}

		return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
	}
}

var sortedArray = quick_Sort(arr)
    for (let i = 0; i < 50; i++) {
        console.log(sortedArray[i]);
    }
    for (let i = 0; i < 50; i++) {
        let k = sortedArray[i] % 2;
        if (k == 0) {
            if (sortedArray[i] > maxP) {
                maxP = sortedArray[i];
            }
        }
        else {
            if (sortedArray[i] > maxN) {
                maxN = sortedArray[i];
            }
        }
    }
    console.log("макс парное->"+maxP);
    console.log("макс не парное->"+maxN);


}
