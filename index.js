var recipes = {}

function updateObjectWithKeyAndValue (object, key, value) {
//this function is taking a new key value pair and adding it into an empty target object 
  return Object.assign ({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  object[key] = value;
  return object
}

function deleteFromObjectByKey (object, key) {
 
 return 
}

function destructivelyDeleteFromObjectByKey (object, key) {
  
  return
}