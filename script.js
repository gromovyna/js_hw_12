
let arr = [1, 2,20, 50, "str", true, function f1() {}, 100];
function copy(list, func) {
	let newArr = list.slice();

	if(typeof func === "function") {
		for(let i = 0; i < newArr.length; i++) {
			if(typeof newArr[i] === "number" && newArr[i]>10 ) newArr[i] = func(newArr[i]);
		}
	}
	return newArr;
}

function mult(number) {
    return number *= 10;}

newList = copy(arr, mult);
console.log(newList);
