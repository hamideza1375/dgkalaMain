
const data = [
  { _id: '1', title: '1', imageUrl: 'p1.png' },
  { _id: '2', title: '2', imageUrl: 'e.png' },
  { _id: '3', title: '3', imageUrl: '7.png' },
  { _id: '4', title: '4', imageUrl: 'e.png' },
]

useEffect(() => {
  let normalization = new normalizationState(data)
  // normalization.remove('1')
  normalization.find('3').title = '333'
  console.log(normalization.value)
}, [])