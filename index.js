var recipes = {}
function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
function updateObjectWithKeyAndValue(object, key, value) {
  const newObject = object.assign({}, object)
  return newObject 
}
