import moment from 'moment-jalaali'
import React from 'react'
import { A_icon, Badge, Button, Card, Column, Icon, M_icon, P, Press, Py, Row } from '../../../../other/Components/Html'




const AnswerComment = (p) => {

  const deleteCommentAnswer = (id, commentid) => p._client.deleteCommentAnswer(id, commentid)
  const likeAnswer = (id, commentid) => p._client.likeAnswer(id, commentid)
  const disLikeAnswer = (id, commentid) => p._client.disLikeAnswer(id, commentid)
  
  return (
    p.answer.map((item) => (
      <Column w='99%' as='center' key={item._id} br={3} mv={8} sh={{ o: 1, r: 8, c: '#ddda' }} >
        <Card
          bgcolor='#efefef' color='black' dr='rtl' border={[1, '#eeee']} headerRow={
            <Column fd='row-reverse' w='100%' >
              <Column ><P color='#777' >{moment(item.date).format('jYYYY/jM/jD')}</P></Column>


              {((item.userphoneOrEmail === p.tokenValue.phoneOrEmail) || (p.tokenValue.isAdmin)) ?
                <Row mh={15} >
                  <A_icon onClick={() => { p.navigation.navigate('EditComment', { id: item.commentId, commentId: item._id }) }} name='edit' size={18} color='#777' style={{ marginHorizontal: 5 }} />
                  <M_icon onClick={() => { deleteCommentAnswer(item.commentId, item._id) }} name='delete-outline' size={18} color='#777' style={{ marginHorizontal: 5 }} />
                </Row> :
                <></>
              }

              <Column ml='auto' >
                <Py color='#777' >{item.fullname}</Py>
              </Column>

            </Column>
          } body={<P>{item.message}</P>} footerRow={
            <Column fd='row-reverse' >
              <Press onClick={() => { disLikeAnswer(item.commentId, item._id) }} bgcolor='silver' p={7} pv={4} pl={1} w={38} mh={2} br={5} jc='center' ai='center' fd='row' >
                <Badge bgcolor='gray' text={item.disLikeCount} top={10} right={1} h={10} w={15} fs={8} scale={.8} />
                <A_icon name='dislike2' size={19} style={{ marginLeft: -5 }} />
              </Press>
              <Press onClick={() => { likeAnswer(item.commentId, item._id) }} bgcolor='silver' p={7} pv={4} pl={1} w={38} mh={2} br={5} jc='center' ai='center' fd='row' >
                <Badge bgcolor='gray' text={item.likeCount} top={10} right={1} h={10} w={15} fs={8} scale={.8} />
                <A_icon name='like2' size={19} style={{ marginLeft: -5 }} />
              </Press>
              <Press onClick={() => { p.navigation.navigate('CreateComment', { commentId: item.commentId, userphoneOrEmail: JSON.stringify(Object.values(item.userphoneOrEmail).map((u, i) => (u + i))) }) }} bgcolor='silver' p={7} pv={4} mh={2} br={5} jc='center' ai='center' ><P fs={12} mt={2} >↩</P></Press>
            </Column>
          } />
      </Column>
    ))
  )
}






const ShowComment = (p) => {

  p._client.getProductComments()

  const deleteComment = (commentid) => p._client.deleteComment(commentid)
  const like = (commentid) => p._client.like(commentid)
  const disLike = (commentid) => p._client.disLike(commentid)

  return (
    // '#f1f'
    < >
      <Button w='99%' mt={-3} mb={7} as='center' style={{ borderStyle: 'dashed' }} outline
        onClick={() => p.tokenValue.fullname ? p.navigation.navigate('CreateComment', { id: p.route.params.id }) : p.toast.warning('', 'برای ارسال نظر اول وارد حسابتان شوید')} >ارسال نظر</Button>

      <Column bgcolor='#fff' >


        <Column fd='row' mt={15} mr={12} >
          <P fs={14} mt={3} > نظر ها | </P>
          <Icon name='star' color='orange' size={27} />
          {p.singleItem.meanStar ? <P fs={14} mt={3} > {(p.singleItem.meanStar).toFixed(1)} امتیاز </P> : <></>}
          <Column btw={1} fg={1} w={'30%'} mh={15} mt={12} />
          <Column />
        </Column>


        {p.childItemComment.map((item, index) => (
          <Column key={item._id} w={'98%'} as='center' br={3} mv={8} sh={{ o: 1, r: 8, c: '#ddda' }} >
            <Card
              bgcolor='#fff' color='black' dr='rtl' border={[1, '#eeee']} headerRow={
                <Column fd='row-reverse' w='100%' >
                  <Column ><P color='#777' >{moment(item.date).format('jYYYY/jM/jD')}</P></Column>
                  <Column><P color='#777' > | </P></Column>
                  <Column><P color='#777' > {item.fiveStar} ستاره </P></Column>
                  <Column mt={-4} ml={2}>
                    <Icon name='star' color='orange' size={25} />
                  </Column>

                  {((item.userphoneOrEmail === p.tokenValue.phoneOrEmail) || (p.tokenValue.isAdmin)) ?
                    <Row mh={15} >
                      <A_icon onClick={() => { p.navigation.navigate('EditComment', { id: item._id }) }} name='edit' size={18} color='#777' style={{ marginHorizontal: 5 }} />
                      <M_icon onClick={() => { deleteComment(item._id) }} name='delete-outline' size={18} color='#777' style={{ marginHorizontal: 5 }} />
                    </Row>
                    :
                    <></>
                  }

                  <Column ml='auto' >
                    <Py color='#777' >{item.fullname}</Py>
                  </Column>

                </Column>
              } body={<P>{item.message}</P>} footerRow={
                <Column fd='row-reverse' >
                  <Press onClick={() => { disLike(item._id) }} bgcolor='silver' p={7} pv={4} pl={1} w={38} mh={2} br={5} jc='center' ai='center' fd='row' >
                    <Badge bgcolor='gray' text={item.disLikeCount} top={10} right={1} h={10} w={15} fs={8} scale={.8} />
                    <A_icon name='dislike2' size={19} style={{ marginLeft: -5 }} />
                  </Press>
                  <Press onClick={() => { like(item._id) }} bgcolor='silver' p={7} pv={4} pl={1} w={38} mh={2} br={5} jc='center' ai='center' fd='row' >
                    <Badge bgcolor='gray' text={item.likeCount} top={10} right={1} h={10} w={15} fs={8} scale={.8} />
                    <A_icon name='like2' size={19} style={{ marginLeft: -5 }} />
                  </Press>
                  <Press onClick={() => { p.navigation.navigate('CreateComment', { commentId: item._id, userphoneOrEmail: JSON.stringify(Object.values(item.userphoneOrEmail).map((u, i) => (u + i))) }) }} bgcolor='silver' p={7} pv={4} mh={2} br={5} jc='center' ai='center' ><P fs={12} mt={2} >↩</P></Press>
                </Column>
              } />

            <Column w={'100%'} ai='flex-start'>
              <AnswerComment answer={item.answer} {...p} />
            </Column>

          </Column>

        ))}


      </Column>
    </>
  )
}

export default ShowComment