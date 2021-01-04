//Checks if the provided string is a valid JSON.
//Use JSON.parse() and a try... catch block to check if the provided string is a valid JSON.


const isValidJSON = str => {
    try {
        JSON.parse(str);
        return true;
    } catch (e) {
        return false;
    }
};


isValidJSON('{"name":"Adam","age":20}'); // true
isValidJSON('{"name":"Adam",age:"20"}'); // false
isValidJSON(null); // true