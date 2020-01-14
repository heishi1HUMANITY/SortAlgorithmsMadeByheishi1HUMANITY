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

const merge = array => {
    const length = array.length;
    let left = [];
    let right = [];
    for(let i = 1; i <= length; i++){
        (i <= length / 2) ? left.push(array[i - 1]) : right.push(array[i - 1]);
    }
    if(left.length <= 2){
        if(left[0] > left[1]){
            let tmp = left[0];
            left[0] = left[1];
            left[1] = tmp;
        }
    }else{
        left = merge(left);
    }
    if(right.length <= 2){
        if(right[0] > right[1]){
            let tmp = right[0];
            right[0] = right[1];
            right[1] = tmp;
        }
    }else{
        right = merge(right);
    }
    array = [];
    let i = 0;
    let j = 0;
    while(true){
        if(left[i] < right[j]){
            array.push(left[i])
            i++;
            if(i == left.length){
                while(true){
                    array.push(right[j]);
                    j++;
                    if(j == right.length) break;
                }
                break;
            }
        }else{
            array.push(right[j]);
            j++;
            if(j == right.length){
                while(true){
                    array.push(left[i]);
                    i++;
                    if(i == left.length) break;
                }
                break;
            }
        }
    }
    return array;
};

console.log(merge(randomArray(1000)));
