const names = ["Alex", "Martha", "Julie", "Alan", "Michael"];
/*
names.forEach((name, index) => {
    console.log(name, index)
});
*/
const myForEach = (array, name, callback) => {
    for(let i = 0; i < array.length; i ++){
        console.log(array[i]);
    }
    callback(array, name);

}

const findName = (arr, name) => {
    for(let i = 0; i < arr.length; i ++){
        if(arr[i] === name){
            console.log("The name " + name + " is located at index " + i);
        }
    }
}

myForEach(names, "Julie", findName);