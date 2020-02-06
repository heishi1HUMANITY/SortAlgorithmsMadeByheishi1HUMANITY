const randomArray = num => {
    let array = [...Array(num).keys()];
    for(let i = 0; i < num; i++){
        let rand = Math.floor(Math.random() * (num - i));
        let tmp = array[rand];
        array[rand] = array[num - 1 - i];
        array[num - 1 -i] = tmp;
    }
    return array;
};

const swap = (array, a, b) => {
    let tmp = array[a];
    array[a] = array[b];
    array[b] = tmp;
};

const heap = array => {
    const length = array.length;
    for(let i = 0; i < length - 1; i++){
        let N = length - 1 - i, j = 1;
        while(true){
            let n = Math.floor((N - j) / 2);
            let left = 2 * n + 1, right = 2 * n + 2;
            if(right > N) right = 2 * n + 1;
            if(array[n] < array[left] || array[n] < array[right]){
                if(array[left] > array[right]) swap(array, left, n);
                else swap(array, right, n);
            }
            j++;
            if(n == 0) break;
        }
        swap(array, 0, length - 1 - i);
    }
    return array;
};

console.log(heap(randomArray(1000)));
