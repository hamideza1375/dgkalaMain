import { useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const range = (from, to) => {
  const range = [];
  for (let i = from; i <= to; i++) {
    range.push(i);
  }
  return range;
}

function _Pagination({ currentPage, current, setcurrent, setcurrentPage, pageLimit, pageNeighbours = 1, page, setpage, item }) {

  const route = useRoute()

  const fetchPageNumbers = () => {
    const totalPages = Math.ceil(item.length / pageLimit);
    if (totalPages > ((pageNeighbours * 2) + 3) + 2) {
      const startPage = Math.max(2, currentPage - pageNeighbours);
      const endPage = currentPage + pageNeighbours
      let pages = range(startPage, endPage);
      if (startPage > 2 && !(totalPages - endPage) > 1) {
        const extraPages = range(startPage - ((pageNeighbours * 2) + 3) - (pages.length + 1), startPage - 1);
        pages = [['LEFT', ...pages], ...extraPages, ...pages];
      }
      else if (!startPage > 2 && (totalPages - endPage) > 1) {
        const extraPages = range(endPage + 1, endPage + ((pageNeighbours * 2) + 3) - (pages.length + 1));
        pages = [...pages, ...extraPages, ['RIGHT', ...pages]];
      }
      if (startPage > 2 && (totalPages - endPage) > 1) {
        pages = [['LEFT', ...pages], ...pages, ['RIGHT', ...pages]];
      }
      else pages = [['LEFT', ...pages], ...pages, ['RIGHT', ...pages]];
      return [1, ...pages, totalPages];
    }
    return range(1, totalPages);
  }


  const gotoPage = (page) => {

    const filterItem = item.filter((f, i) => (
      i >= (page - 1) * pageLimit) &&
      (i < (page - 1) * pageLimit + pageLimit))

    const filterItem2 = item.filter((f, i) => (
      i >= (page - 2) * pageLimit) &&
      (i < (page - 2) * pageLimit + pageLimit))

    const filterItem3 = item.filter((f, i) => (
      i >= (page - 3) * pageLimit) &&
      (i < (page - 3) * pageLimit + pageLimit))

    if (filterItem.length) {
      setcurrentPage(page);
      setcurrent(filterItem)
    } else if (filterItem2.length) {
      setcurrentPage(page - 1)
      setcurrent(filterItem2)
    }
    else {
      setcurrentPage(page - 2)
      setcurrent(filterItem3)
    }
  }

  const handleClick = (page) => gotoPage(page);

  const handleMoveLeft = () => gotoPage(currentPage - (pageNeighbours * 2) - 1);

  const handleMoveRight = () => {
    let total = Math.ceil(item.length / pageLimit)
    if (currentPage < total)
      gotoPage(currentPage + (pageNeighbours * 2) + 1);
  }

  useEffect(() => { gotoPage(1); setpage(1) }, [route.params?.id])

  useEffect(() => { gotoPage(page); }, [item])


  const pages = fetchPageNumbers();
  let total = Math.ceil(item.length / pageLimit)
  if (total <= 1) return null;

  return (
    <View style={styles.pagination}>
      {pages.map((page, index) => {

        if (page[0] === 'LEFT') return (
          <Pressable onPressIn={() => { setpage(page[1]) }}
            onPress={() => setpage(page => page > 2 && handleMoveLeft())} key={index} style={[styles.pageitem, { width: 50 }]}>
            <Text style={{ fontSize: 25, top: -1, color: '#37e' }}>»</Text>
          </Pressable>
        );

        if (page[0] === 'RIGHT') return (
          <Pressable onPressIn={() => { setpage(page[1]) }} onPress={() => handleMoveRight()} key={index} style={[styles.pageitem, { width: 50 }]}>
            <Text style={{ fontSize: 25, top: -1, color: '#37e' }} >«</Text>
          </Pressable>
        );

        return (
          <Pressable onPressIn={() => { setpage(page) }} onPress={() => handleClick(page)} key={index} style={[styles.pageitem, page <= total ? { backgroundColor: currentPage === page ? '#6cf' : '#efffff33' } : { display: 'none' }]}>
            <Text style={[styles.pagelink, { color: currentPage === page ? '#24e' : '#555' }]} >{page}</Text>
          </Pressable>
        );

      })}
    </View>
  );


}

function Pagination(p) {
  return (
    p.item.length
      ?
      <_Pagination {...p} />
      :
      <View />
  )
}

export default Pagination


const styles = StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    width: '100%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 'auto',

  },
  pageitem: {
    width: 44,
    height: 44,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'rgb(197, 192, 192)',
    backgroundColor: '#efffff88',
    borderRadius: 3,
  }
})