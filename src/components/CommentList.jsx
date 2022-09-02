// 03 - CommentsList avrà all’interno una lista di commenti riguardo il libro selezionato, 
// l’array di commenti verrà passato come prop dal componente CommentArea.
// Ogni commento sarà sempre un componente SingleComment.

import { ListGroup } from 'react-bootstrap'
import SingleComment from './SingleComment'

const CommentList = ({ commentsToShow }) => (
  <ListGroup style={{ color: 'black' }}>
    {commentsToShow.map((comment) => (
      <SingleComment comment={comment} key={comment._id} />
    ))}
  </ListGroup>
)

export default CommentList
