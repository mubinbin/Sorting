// bubble sort
function bubbleSort(arr)
{
    if(arr.length ===0) return;
    for(let i =0; i < arr.length; i++)
    {
        for(let j =0; j < arr.length; j++ )
        {
            if(arr[j] < arr[j+1])
            {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}



// selection sort
function selectionSort(arr)
{
    if(arr.length ===0) return;
    let min;
    for(let i = 0; i < arr.length; i++)
    {
        min = i;
        for(let j = i+1; j < arr.length; j++)
        {
            if(arr[j] < arr[min])
            {
                min = j;
                let temp = arr[i];
                arr[i] = arr[min];
                arr[min] = temp;
            }
        }
    }
    return arr;
}

// insertion sort
function insertionSort(arr)
{
    let temp;
    for(let i =1; i<arr.length; i++)
    {
        temp = arr[i];
        for(let j =i; j>=1; j--)
        {
            if(arr[j-1]>temp)
            {
                arr[j] = arr[j-1];
                arr[j-1] = temp;
                temp = arr[j-1];
            }
        }
    }
}

// merge sort
function merge(arr, arrCopy, low, mid, high)
{
    let i = low;
    let j = mid+1;
    for(let index = low; index <= high; index++){
        arrCopy[index] = arr[index];
    }
    for(let index = low; index <= high; index++){
        if(i > mid){
            arr[index] = arrCopy[j++];
        }else if(j > high){
            arr[index] = arrCopy[i++];
        }else if(arrCopy[i] < arrCopy[j]){
            arr[index] = arrCopy[i++];
        }else{
            arr[index] = arrCopy[j++];
        }
    }
}

function mergeSort(arr, arrCopy, low, high)
{
    if(high<=low) return;

    let mid = Math.floor((high+low)/2);
    mergeSort(arr, arrCopy, low, mid);
    mergeSort(arr, arrCopy, mid+1, high);

    // stop if already sorted at this interval
    if(arr[mid+1]>=arr[mid]) return;

    merge(arr, arrCopy, low, mid, high)
}

// partition
// function partition(arr, pivotIndex)
// {
//     let temp = arr[0];
//     arr[0] = arr[pivotIndex];
//     arr[pivotIndex] = temp;

//     let left = 1;
//     let right = arr.length-1;

//     while(left < right){
//         while(arr[left] < arr[0]){
//             left++;
//         }
    
//         while(arr[right] > arr[0]){
//             right--;
//         }

//         if(left >= right) break;

//         let temp2 = arr[left];
//         arr[left] = arr[right];
//         arr[right] = temp2;
//     }

//     temp = arr[0];
//     arr[0] = arr[right];
//     arr[right] = temp;
//     return right;
// }

function partition(arr, low, high)
{
    let valueOfPivot = arr[low];
    let left = low+1;
    let right = high;
    while(left < right){
        while(arr[left] <= valueOfPivot){
            left++;
        }
    
        while(arr[right] >= valueOfPivot){
            right--;
            if(right==low) return right;
        }

        if(left >= right) break;

        let temp2 = arr[left];
        arr[left] = arr[right];
        arr[right] = temp2;
    }
    
    let temp = valueOfPivot;
    arr[low] = arr[right];
    arr[right] = temp;
    return right;
}
// quick sort
function quickSort(arr, low, high){
    if(low+1 >= high){
        return;
    }
    
    var i = partition(arr, low, high);
    quickSort(arr, low, i-1);
    quickSort(arr, i+1, high);
}
