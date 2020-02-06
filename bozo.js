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

const checker = array => {
    for(let i = 0; i < array.length; i++){
        if(array[i] > array[i + 1]) return false;
    }
    return true;
};

const swap = (array, a, b) => {
    let tmp = array[a];
    array[a] = array[b];
    array[b] = tmp;
};

const bozo = array => {
    let length = array.length;
    while(true){
        if(checker(array)) break;
        let rand = [Math.floor(Math.random() * length), Math.floor(Math.random() * length)];
        swap(array, rand[0], rand[1]);
    }
    return array;
};

console.log(bozo(randomArray(10)));
