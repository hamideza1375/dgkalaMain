import React from 'react'
import { Form, Column } from '../../other/Components/Html'
import _useEffect from '../../controllers/_initial'

const createComment = (p) => {
  _useEffect(()=>{
    p.navigation.setParams({userphoneOrEmail: encodeURIComponent(p.route.params.userphoneOrEmail)})
  },[])

  // console.log(JSON.parse(decodeURIComponent(p.route.params.userphoneOrEmail)).map((u, i) => u.slice(0, u.lastIndexOf(i))).join('') );

  return (
    <Column f={1} >
      <Form mAutoFocus s={!p.route.params.commentId ? true : false} m onClick={!p.route.params.commentId ? p._client.createComment : p._client.createCommentAnswer} />
    </Column>
  )
}

export default createComment