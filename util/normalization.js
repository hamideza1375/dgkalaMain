const normalization = (array) => {
  const object = {}
  array.forEach((item) => (object[item.id] = item))
  return object
}


let array = normalization([{ id: 'id1', name: 'u1' }, { id: 'id2', name: 'u2' }, { id: 'id3', name: 'u3' }])

 array['id1'].name = 'newName'
 delete array['id2']

 array = Object.values(array)

 console.log(array);





// const normalization = (array) => {
//   const object = {}
//   array.forEach((item) => (object[item.id] = item))
//   return object
// }


// const array = [{ id: 'id1', name: 'u1' }, { id: 'id2', name: 'u2' }, { id: 'id3', name: 'u3' }]
  
//  const newDate = normalization(array)

//  newDate['id1'].name = 'newName'
//  delete newDate['id2']

//  console.log(Object.values(newDate));

 



// const a = new Map([{id:1, name:'u1'}, {id:2, name:'u2'}, {id:3, name:'u3'}])

// const user = [{id:1, name:'u1'}, {id:2, name:'u2'}, {id:3, name:'u3'}]


// user.map((item)=>(
//   a.set(item.id, item)
// ))

// console.log(a);