//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]
let dog_names1 = ["Max1","HAS","PuRple","dog"]
let dog_names2 = ["Max1","HAS","PuRple2","dog"]
let dog_names3 = ["Max1","HAS","PuRple2","doG"]
let dog_names4 = ["Max1","HAS","PuRple2"]

function findWords(dnames, dstring){
    for (let i = 0; i<dnames.length; i++)
    {
        //console.log(dnames[i].toLowerCase());
        if (dstring.toLowerCase().search(dnames[i].toLowerCase()) != -1)
        {
            return "Matched dog_name";
        }
    }
    return "No Matches";
}

//Call method here with parameters
console.log(findWords(dog_names,dog_string))
console.log(findWords(dog_names1,dog_string))
console.log(findWords(dog_names2,dog_string))
console.log(findWords(dog_names3,dog_string))
console.log(findWords(dog_names4,dog_string))

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr)
{
    for(i = 0; i<arr.length; i++)
    {
        if(i%2 == 0)
        {
            //console.log(arr[i]);
            arr.splice(i, 1, 'even index');
        }
    }
    return arr;
}
console.log(replaceEvens(arr));

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]
