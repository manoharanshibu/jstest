// works for sorted or unsorted array
let arr1 = [1,4,6]; 
let arr2 = [2,3,5]; 
let arr = [...arr1, ...arr2];

export const es6_sort = () => {
	arr.sort((a, b) => {
		return a - b;
    });
    
    return arr;
}

export const bubble_sort = () => {
 	for (let i = 0; i < arr.length; i++) { 
        for (let j = 0; j < (arr.length - i - 1); j++) { 
            if(arr[j] > arr[j+1]) {
                var tmp = arr[j]; 
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
            }
        }        
    }
    return arr;
}
