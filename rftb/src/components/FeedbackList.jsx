import React from 'react'
import FeedbackItem from './FeedbackItem'

function FeedbackList({ feedback} ) {
    if(!feedback || feedback.length === 0){
        return <p>No Feedback Yet</p>
    }
  return (
    <div>
      <div className="feedback-list">
        {feedback.map((item) => (
            <FeedbackItem key = {item.id} item = {item} />
         ))}
      </div>
    </div>
  )
}

export default FeedbackList
