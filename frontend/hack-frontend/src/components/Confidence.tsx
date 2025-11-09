import React from 'react'

interface Props{
    confidence : number
}

export const Confidence: React.FC<Props> = ({confidence}) => {
  return (
    <div>Confidence: {confidence}</div>
  )
}

export default Confidence