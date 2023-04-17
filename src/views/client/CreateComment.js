import React from 'react'
import { Form, Column } from '../../other/Components/Html'

const createComment = (p) => {
  return (
    <Column f={1} >
      <Form mAutoFocus s={!p.route.params.commentId ? true : false} m onClick={!p.route.params.commentId ? p._client.createComment : p._client.createCommentAnswer} />
    </Column>
  )
}

export default createComment