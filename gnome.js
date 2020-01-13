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

const gnome = array => {
    let length = array.length;
    let i = 0;
    while(i < length){
        if(array[i] > array[i + 1]){
            let tmp = array[i];
            array[i] = array[i + 1];
            array[i + 1] = tmp;
            if(i != 0) i--;
        }else{
            i++;
        }
    }
    return array;
};

console.log(gnome(randomArray(1000)));
