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

const quick = array => {
    const length = array.length, p = array[0];
    let left = [], right = [];
    for(let i = 1; i < length; i++){
        if(array[i] < p){
            left.push(array[i])
        }else{
            right.push(array[i]);
        }
    }

    if(left.length > 2){
        left = quick(left);
    }else if(left.length == 2){
        if(left[0] > left[1]){
            let tmp = left[0];
            left[0] = left[1];
            left[1] = tmp;
        }
    }

    if(right.length > 2){
        right = quick(right);
    }else if(right.length == 2){
        if(right[0] > right[1]){
            let tmp = right[0];
            right[0] = right[1];
            right[1] = tmp;
        }
    }

    return [...left,p,...right];
};

console.log(quick(randomArray(100000)))
