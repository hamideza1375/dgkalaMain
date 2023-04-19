import React from 'react'

const Pagination = () => {

  const [ass, setass] = useState(true)
  const [page, setpage] = useState(1)
  const [pageLimit] = useState(16)
  const [current, setcurrent] = useState([])
  const [currentPage, setcurrentPage] = useState(1)

  return (
    foodMap.get(p.route.params.id) ?
      <Pagination
        food={foodMap.get(p.route.params.id)}
        current={current}
        setcurrent={setcurrent}
        pageLimit={pageLimit}
        ass={ass} page={page}
        setpage={setpage}
        currentPage={currentPage}
        setcurrentPage={setcurrentPage} />
      :
      <></>

  )
}

export default Pagination