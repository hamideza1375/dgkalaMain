export default function normalizationState(array, setarray = () => { }) {
  let obj = {}
  array.forEach(a => (obj[a._id] = a))
  this.newArray = Object.values(obj)
  this.value = () => { return this.newArray }
  this.remove = (id) => { delete obj[id]; this.newArray = Object.values(obj)}
  this.find = (id) => { return obj[id] ? obj[id] : {} }
  this.findIndex = (id) => { return this.newArray.findIndex((_id) => (_id === id)) }
  this.changeIndex = (index) => { return (array[index] ? this.newArray[index] : {}) }
  this.push = (data) => { this.newArray.push(data); obj[data._id] = data }
  this.unshift = (data) => { this.newArray.unshift(data); obj[data._id] = data }
  this.splice = (num1, num2, data) => { data ? this.newArray.splice(num1, num2, data) : this.newArray.splice(num1, num2) }
  this.slice = (num1, num2) => { this.newArray = this.newArray.slice(num1, num2) }
  this.sort = (key) => { this.newArray.sort((a, b) => (a[key] - b[key])); }
  this.reverse = () => { this.newArray.reverse() }
  this.match = (key, value) => { this.newArray = this.newArray.filter((m) => (m[key].match(value))) }
  this.reduce = (key) => { let val = this.newArray; let x = 0; for (let i in val) { x += Number(val[i][key]) } return x }
  this.save = () => { setarray({ ...this }) }
  setarray({ ...this })
}

// const arr = [{ _id: '1', value: 'sal' }, { _id: '2', value: '2' }, { _id: '3', value: 'basalbasal' }, { _id: '6', value: 'basalbasal' }]
// const state = new normalizationState(arr)

//   const state = { ...category }
//   state.remove('2')
//   state.find('3').title = '000'
//   state.changeIndex('0').title = 'indexchange'
//   state.unshift({ _id: '0', title: 'unshift' })
//   state.push({ _id: '6', title: '-656' })
//   state.splice(1, 0, { _id: 'A', title: 'A' })
//   state.sort('title')
//   state.reverse()
//   state.slice(1, 2)
//   state.match('title', '0')
//   console.log(state.reduce('value'));
//   state.save()

// this.save = () => { setarray({value:this.value, remove:this.remove, find:this.find, findIndex:this.findIndex, changeIndex:this.changeIndex, save:this.save}) }








// export default function normalizationState(array, setarray = () => { }) {
//   let obj = {}
//   array.forEach(a => (obj[a._id] = a))
//   this.value = () => { return Object.values(obj) }
//   this.remove = (id) => { delete obj[id]; }
//   this.find = (id) => { return obj[id] ? obj[id] : {} }
//   this.findIndex = (id) => { return Object.keys(obj).findIndex((_id) => (_id === id)) }
//   this.changeIndex = (id) => { return (array[id] ? Object.values(obj)[id] : {}) }
//   this.push = (data) => { this.value = () => { return Object.values(obj).concat(data) }; }
//   this.unshift = (data) => { this.value = () => { let val = Object.values(obj); val.unshift(data); return val }; }
//   this.splice = (num1, num2, data) => { this.value = () => { let val = Object.values(obj); val.splice(num1, num2, data); return val }; }
//   this.slice = (num1, num2) => { this.value = () => { let val = Object.values(obj); val.splice(num1, num2); return val }; }
//   this.sort = (key) => { this.value = () => { let val = Object.values(obj); val.sort((a, b) => (a[key] - b[key])); return val }; }
//   this.reverse = () => { this.value = () => { let val = Object.values(obj); val.reverse(); return val }; }
//   this.reduce = (key) => { let val = Object.values(obj); let x = 0; for (let i in val) { x += val[i][key] } return x }
//   this.match = (key, value) => { const val = Object.values(obj).filter((m) => (m[key].match(value))); return val }
//   this.save = () => { setarray({ ...this }) }
//   setarray({ ...this })
// }

// // const arr = [{ _id: '1', value: 'sal' }, { _id: '2', value: '2' }, { _id: '3', value: 'basalbasal' }, { _id: '6', value: 'basalbasal' }]
// // const state = new normalizationState(arr)
// // state.remove('2')
// // state.find('1').value = '111'
// // state.changeIndex('1')
// // state.push({ _id: '4', value: '444' })
// // state.unshift({ _id: '0', value: '000' })
// // state.splice(0,0,{ _id: 'A', value: 'A' })
// // state.slice(0,1)
// // state.sort('value')
// // state.reverse()
// // state.reduce('value')
// // console.log(state.match('value','sal'));
// // console.log(state.findIndex('1'));
// // console.log(state.value());
// // this.save = () => { setarray({value:this.value, remove:this.remove, find:this.find, findIndex:this.findIndex, changeIndex:this.changeIndex, save:this.save}) }