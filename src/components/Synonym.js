import React from 'react'

const Synonym = ({myWord,wordSynonym}) => {
  return (
    <div>{
      wordSynonym.slice(0,11).map((syn,idx)=>{
      const {word:ext}=syn
      return <div key={idx} className="synonyms">
      {ext}
     <hr/></div>   
    })}
    </div>
  )
}

export default Synonym