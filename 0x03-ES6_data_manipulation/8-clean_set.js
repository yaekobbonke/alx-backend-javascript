function cleanSet(set, startString) {
    const filteredValues = [];
    
    set.forEach(function(value) {
      if (value.startsWith(startString)) {
        const cleanedValue = value.substring(startString.length);
        filteredValues.push(cleanedValue);
      }
    });
    
    return filteredValues.join("-");
  }
  export default cleanSet;