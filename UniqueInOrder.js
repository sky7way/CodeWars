const uniqueInOrder = iterable => {
    return (typeof iterable == "object") ? iterable.filter((_,idx,arr)  => 
                                         arr[idx] !== arr[idx+1]) 
                                         : iterable.split("").filter((_,idx,arr) =>
                                         arr[idx] !== arr[idx+1]);
    }