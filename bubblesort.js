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