function normalizationState(array){
  this.obj = {}
  array.forEach(a=>(this.obj[a._id] = a))
  this.value=()=>{return Object.values(this.obj)}
  this.remove=(id)=>{ delete this.obj[id]}
  this.find=(id)=>{ return this.obj[id]}
  this.findIndex=(id)=>{ return Object.keys(this.obj).findIndex((_id)=>( _id === id ))}
  // this.value=()=>{return this.obj}
 }
 
//  const array = [{_id:'one'}, {_id:'two'}, {_id:'three'}]
//  const newArray = new normalizationState(array)
//  const value = newArray.value()
//  console.log(value);
 
//  newArray.remove('two')
//  console.log(value);
 
//  const find = newArray.find('three')
//  find.color = 'red'
//  console.log(find);
 
//  const findIndex = newArray.findIndex('one')
//  console.log(findIndex);
 