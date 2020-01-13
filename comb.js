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

const comb = array => {
    let length = array.length;
    let gap = Math.floor(length / 1.3);
    let changed = true;
    while(changed){
        if(gap != 1){
            for(let i = 0; i + gap < length; i++){
                if(array[i] > array[i + gap]){
                    let tmp = array[i];
                    array[i] = array[i + gap];
                    array[i + gap] = tmp;
                }
            }
            gap = Math.floor(gap / 1.3);
            if(gap === 9 || gap === 10) gap = 11;
        }else{
            for(let i = 0; i + gap < length; i++){
                if(array[i] > array[i + gap]){
                    let tmp = array[i];
                    array[i] = array[i + gap];
                    array[i + gap] = tmp;
                    changed = false;
                }
            }
        }
    }
    return array;
};

console.log(comb(randomArray(1000)));
