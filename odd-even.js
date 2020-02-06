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

const oddEven = array => {
    let length = array.length;
    let changed = true;
    while(changed){
        changed = false;
        for(let i = 0; i < length - 1; i += 2){
            if(array[i] > array[i + 1]){
                swap(array, i, i + 1);
                changed = true;
            }
        }
        for(let i = 1; i < length - 1; i += 2){
            if(array[i] > array[i + 1]){
                swap(array, i, i + 1);
                changed = true;
            }
        }
    }
    return array;
};

console.log(oddEven(randomArray(1000)));
