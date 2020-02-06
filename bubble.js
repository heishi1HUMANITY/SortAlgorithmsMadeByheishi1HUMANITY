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

const bubble = array => {
    let length = array.length;
    for(let i = 0; i < length; i++){
        for(let j = 0; j - 1 < length - i; j++){
            if(array[j] > array[j + 1]){
                swap(array, j, j + 1);
            }
        }
    }
    return array;
};

console.log(bubble(randomArray(1000)));
