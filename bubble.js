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

const bubble = array => {
    let length = array.length;
    let c = 0;
    while(true){
        console.log(array);
        for(let i = 0; i < length - c; i++){
            if(array[i] > array[i + 1]){
                let tmp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = tmp;
            }
        }
        if(checker(array)) break;
        else continue;
    }
    return array;
};

console.log(bubble(randomArray(1000)));