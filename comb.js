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

const comb = array => {
    let length = array.length;
    let gap = Math.floor(length / 1.3);
    let changed = true;
    while(changed){
        if(gap != 1){
            for(let i = 0; i + gap < length; i++){
                if(array[i] > array[i + gap]){
                    swap(array, i, i + gap);
                }
            }
            gap = Math.floor(gap / 1.3);
            if(gap === 9 || gap === 10) gap = 11;
        }else{
            for(let i = 0; i < length; i++){
                for(let j = 0; j < length - i; j++){
                    if(array[j] > array[j + 1]){
                        swap(array, j, j + 1);
                    }
                }
            }
            break;
        }
    }
    return array;
};

console.log(comb(randomArray(1000)));
