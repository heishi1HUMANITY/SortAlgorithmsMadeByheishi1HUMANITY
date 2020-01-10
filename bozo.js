const randomArray = num => {
    let array = [];
    for(let i = 0; i < num; i++){
        array.push(i);
    }
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

const bozo = array => {
    let length = array.length;
    while(true){
        if(checker(array)) break;
        let rand = [Math.floor(Math.random() * length), Math.floor(Math.random() * length)];
        let tmp = array[rand[0]];
        array[rand[0]] = array[rand[1]];
        array[rand[1]] = tmp;
    }
    return array;
};

console.log(bozo(randomArray(10)));
