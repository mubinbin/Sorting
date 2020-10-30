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

function isSorted(arr){
    let n = arr.length;
    if(n <=1) return true;
    for(let i =0; i<n-1; i++){
        if(arr[i]>arr[i+1])
            return false;
    }
    return true;
}


function partition(arr, low, high)
{
    let pivot = Math.floor(Math.random()*(high-low+1))+low;
    let valueOfPivot = arr[pivot];
    arr[pivot] = arr[low];
    arr[low] = valueOfPivot;
    let left = low+1;
    let right = high;
    while(left < right){
        while(arr[left] <= valueOfPivot){
            left++;
        }
    
        while(arr[right] >= valueOfPivot){
            right--;
            if(right==low) break;
        }

        if(left >= right) break;

        let temp2 = arr[left];
        arr[left] = arr[right];
        arr[right] = temp2;
        left++;
        right--;
    }
    if(arr[right]<arr[low]){
        arr[low] = arr[right];
        arr[right] = valueOfPivot;
    }
    return right;
}
// quick sort
function quickSort(arr, low, high){
    if(isSorted(arr)) return;
    if(low >= high) return;
    
    var i = partition(arr, low, high);
    quickSort(arr, low, i-1);
    quickSort(arr, i+1, high);

    if(isSorted(arr)){
        return;
    }else{
        low = 0;
        high= arr.length-1;
        quickSort(arr, low, high);
    }
}