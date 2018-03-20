var recipes = {}

function updateObjectWithKeyAndValue (object, key, value) {
//this function is taking a new key value pair and adding it into an empty target object without modifying the actual object that is a paramater of the function; also adding the object to the empty object
  return Object.assign ({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
//this function is changing the object in order to have the new key value pair added to the object and returning the new object that results in this change
  object[key] = value;
  return object
}

function deleteFromObjectByKey (object, key) {
 Object.assign ({}, )
 return 
}

function destructivelyDeleteFromObjectByKey (object, key) {
  
  return
}