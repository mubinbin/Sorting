// initial shuffled array
let arr = [];
for (let i = 100; i <600 ; i+=10){
    arr.push(i);
}
// shuffle
arr.sort(function (a, b) { return Math.random() - 0.5 });
// console.log(arr)

//====================================================================
//1. selection sort
function selectionSort(arr) {
    if(arr.length === 1 || arr.length === 0){
        return arr;
    }
    let min, i ,j, temp;
    for (i = 0; i < arr.length; i++){
        min = i;
        for (j = i + 1; j < arr.length; j++){
            if (arr[j] < arr[min]){
                min = j;
                temp = arr[i];
                arr[i] = arr[min];
                arr[min] = temp;
            }
        }
    }
    return arr;
}

// console.log(selectionSort(arr));

//2. insertion sort
let n = 1
function insertionSort(length_of_arr) {
    let j, temp;

    setTimeout(function() {

        // temp = arr[i]
        // for(j = i; temp < arr[j-1]; j--){
        //         arr[j] = arr[j-1]
        // }

        // arr[j] = temp;

        // (function (i, arr, j) {
            // console.log("this is n "+n);
            // console.log($("#bar" + (n-1)).height())
            // $("#bar" + (n-1)).css("background-color", "green");
            // $("#bar" + (n-1)).css("background-color", "black");
            // $("#bar" + n).css("background-color", "red");
            temp = $("#bar" + n).height();

            for(j = n; temp < $("#bar" + (j-1)).height(); j--){
                // arr[j] = arr[j-1];
                console.log($("#bar" + (j-1)).height())
                // $("#bar" + (j-1)).css("background", "green");
                $("#bar" + j).height($("#bar" + (j-1)).height());
                // $("#bar" + j).css("background", "black");
                
            }
            // arr[j] = temp;
            $("#bar" + j).height(temp);
            // $("#bar" + j).css("background", "green");

            n++;
            if(n < length_of_arr){
                insertionSort(length_of_arr)
            }

            
    }, 100);
        // }(i, arr, j));
}


//====================================================================





//setup div with height associated with values in the array
$("#setup_btn").click(function(){
    location.reload();
});

for(let i = 0; i < arr.length; i++){
    $("#mainContainer").append("<div id = bar" + i + " style = 'height:"+arr[i]+"px'></div>");
}

$("#mainContainer div"). css({
    "background-color": "black",
    "border": "1px solid grey",
    "width": "2%",
    "justify-content": "flex-end"
});

// document.getElementById('sort').onclick =(() => console.log("hello"));
document.getElementById('sort').onclick =() => insertionSort(50);

// sort div by height
// $("#sort").click(function(){
//     insertionSort(arr);
// });

//     if ($("#sortMethod").val() === "selection"){
//         let sortedArr = selectionSort(arr);
//         for(let i = 0; i < sortedArr.length; i++){
//             $("#bar" + i).css( "height", sortedArr[i]);
//         }
//     }
    
// });
