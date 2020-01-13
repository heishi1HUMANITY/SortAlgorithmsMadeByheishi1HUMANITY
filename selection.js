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

const selection = array => {
    const length = array.length;
    let c = 0;
    while(c < length){
        let min = c;
        for(let i = 0 + c; i < length; i++){
            if(array[min] > array[i]) min = i;
        }
        let tmp = array[c];
        array[c] = array[min];
        array[min] = tmp;
        c++;
    }
    return array;
};

console.log(selection(randomArray(1000)));
