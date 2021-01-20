import React from 'react'

class SearchOption extends React.Component{
  state = {
   theChekingThing: ""
   }

   handleTheCheckedThing = () => {
      // console.log(evt.target.value)
      this.setState({
         theChekingThing: evt.target.value
      })
   }
   render(){
     return(
      <>
       <ul>
         <input type="radio" value="all" id="all" checked={this.state.theChekingThing === "All"} onChange={this.handleTheCheckedThing}/>
            <label htmlFor="all">All</label>
         <input type="radio" value="Noun" id="noun" checked={this.state.theChekingThing === "Noun"} onChange={this.handleTheCheckedThing}/>
            <label htmlFor="noun">Noun</label>
         <input type="radio" value="verb" id="verb" checked={this.state.theChekingThing === "Verb"} onChange={this.handleTheCheckedThing}/>
            <label htmlFor="verb">Verb</label>
         <input type="radio" value="adverb" id="adverb" checked={this.state.theChekingThing === "Adverb"} onChange={this.handleTheCheckedThing}/>
            <label htmlFor="adverb">Adverb</label>
         </ul>
         </>
      )
   }
}




//if(!termFromChild.includes("X") && termFromChild.length < 5){
   // this.setState({
   //    secondInput: termFromChild.toUpperCase()
   // })
//}

















export default SearchOption