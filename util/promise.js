const _promise = (type) => new Promise(async (resolve, reject) => {
  if (type === 'y') { resolve('yes') }
  if (type === 'n') { resolve('no') }
})

_promise('y').then((res) => { console.log(res); })

////////////////////////////////////////////////////////////////////////////////////

const _promise2 = new Promise(async (resolve, reject) => {
  resolve('salam')
})

_promise2.then((res) => { console.log(res); })