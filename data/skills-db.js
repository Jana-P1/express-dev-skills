const skills = [
  {text: "Javascript", achieved: true, _id: 125222}, 
  {text: "HTML", achieved: true, _id: 127905},
  {text: "CSS", achieved: true, _id: 139607},
  {text: "Express", achieved: true, _id: 165978},
  {text: "React", achieved: false, _id: 186509}
]

const find = (conditions, callback) => {
  // if conditions are not met, execute callback
  try {
    // make sure that condition param is an object, if not throw an error
    if (!(conditions instanceof Object)) {
      throw new TypeError("Please pass in an object")
    }
    // if object is empty, return all skills
    if (Object.keys(conditions).length === 0) return callback(null, skills)
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

const findById = (id, callback) => {
  try {
    const skill = skills.find(skill => skill._id === parseInt(id))
    if (!skill) throw new Error ("No skill found")
    return callback(null, skill)
  } catch (error) {
    console.log(error)
    return callback(error, null)
  }
}

export {
  find,
  findById,
}