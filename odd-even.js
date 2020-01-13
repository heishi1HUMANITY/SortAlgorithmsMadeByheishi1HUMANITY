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

const oddEven = array => {
    let length = array.length;
    let changed = true;
    while(changed){
        changed = false;
        for(let i = 0; i < length - 1; i += 2){
            if(array[i] > array[i + 1]){
                let tmp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = tmp;
                changed = true;
            }
        }
        for(let i = 1; i < length - 1; i += 2){
            if(array[i] > array[i + 1]){
                let tmp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = tmp;
                changed = true;
            }
        }
    }
    return array;
};

console.log(oddEven(randomArray(1000)));
