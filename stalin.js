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

const stalin = array => array = array.reduce((a, b) => !a.length || b >= a[a.length - 1] ? [...a, b] : a,[]);

console.log(stalin(randomArray(1000)));
