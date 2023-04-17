import React from 'react'
import { Column, Form } from '../../other/Components/Html'

const EditComment = (p) => {

  p._client.getSingleComment()

  return (
    <Column f={1} >
      <Form mAutoFocus s={!p.route.params.commentId ? true : false} m onClick={()=>!p.route.params.commentId ? p._client.editComment() : p._client.editCommentAnswer()} />
    </Column>
  )
}

export default EditComment