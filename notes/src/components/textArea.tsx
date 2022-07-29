import React from 'react'

export interface ITextAreaProps {
  value: string;
}

export const TextArea: React.FC<ITextAreaProps> = ({value}) => {
  return (
      <textarea value={value}/>
  )
}