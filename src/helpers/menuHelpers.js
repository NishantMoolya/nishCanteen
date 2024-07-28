function isDeepEqual(obj1, obj2) {
    if (obj1 === obj2) return true;
    
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
      return false;
    }
  
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (let key of keys1) {
      const prop1 = obj1[key];
      const prop2 = obj2[key];
  
      if (Array.isArray(prop1) && Array.isArray(prop2)) {
        if (!areArraysEqual(prop1, prop2)) {
          return false;
        }
      } else if (!isDeepEqual(prop1, prop2)) {
        return false;
      }
    }
  
    return true;
  }
  
  function areArraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
  
    for (let i = 0; i < arr1.length; i++) {
      if (!isDeepEqual(arr1[i], arr2[i])) {
        return false;
      }
    }
  
    return true;
  }

  function isArraysEqual(arr1, arr2) {
    // Check if both arrays are the same reference
    if (arr1 === arr2) return true;
  
    // Check if lengths are different
    if (arr1.length !== arr2.length) return false;
  
    const frequencyCounter = {};
  
    // Count occurrences of each element in arr1
    for (const item of arr1) {
      frequencyCounter[item] = (frequencyCounter[item] || 0) + 1;
    }
  
    // Decrease count for each element in arr2
    for (const item of arr2) {
      if (!frequencyCounter[item]) {
        return false; // Item not found or count is zero
      }
      frequencyCounter[item]--;
    }
  
    // Check if all counts are zero
    return Object.values(frequencyCounter).every(count => count === 0);
  }

export { isDeepEqual,isArraysEqual };