import React from 'react'
import './Synonym.css'

const Synonym = ({myWord,wordSynonym,isDark}) => {
  const containerStyle = {
    backgroundColor: isDark ? '#454545' : '#FFB6C1',
  };
  return (
    <div className='wordContainer' >{
      wordSynonym.map((syn,idx)=><>
        <span className='word' style={containerStyle}>{syn.word}</span>
      </>)}
    </div>
  )
}

// {
//   const {word:ext}=syn
//   return <div key={idx} className="synonyms">
//   {ext}
//  <hr/></div>   
// }
export default Synonym