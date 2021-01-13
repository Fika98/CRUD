import React from 'react'



class List extends React.Component{

    //initial state
    // SHOULD NOT BE WRITING THIS.PROPS ANYWHERE IN YOUR STATE OBJ
  state = {
    showlist: false
    
  }

  handleContriibution = (evt) =>{
    let newContributionValue = this.props.lists.contribution + 1;
    let contributionId = this.props.lists.id;
    
    this.props.updateOneList(contributionId, newContributionValue)
  }

  handleShowingList = (evt) => {
    this.setState({
      showlist: !this.state.showlist
    })
  }

  handleClick = (evt) => {
    //   console.log(this.props.lists.id)
    // this.props.deleteAlist(this.props.lists.id)
    this.props.deleteAlist(this.props.lists.id)
  }
  
  render(){
    let {list_name, items, contribution} = this.props.lists
    // console.log(this.props.lists)
    let arrayOfItems = items.map((itemObj) => {
        // console.log(itemObj.name)
      return <li key={itemObj.id}>{itemObj.name}</li>
    })
                                   //always write you console log above you return
                                    //when we invoke a function in render, we care about the return value
      return(
        <>
          <li className = "container">
            <button className = "deleteBtn" onClick={this.handleClick}>X</button>
            <img
            className="img" 
            src = "https://images.unsplash.com/photo-1569161031678-f49b4b9ca1c2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bGlzdHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            alt={list_name}
            onClick={this.handleShowingList}
            />
            <h2>{list_name}</h2>
            {
              this.state.showlist 
              ?
              <ol>
              {arrayOfItems}
              </ol>
              :
              null
            }
            <button className = "contriBtn"
              onClick = { this.handleContriibution }

            >
              Contributions: {contribution}</button>
          </li>
          
        </>
      )
  }

}


export default List