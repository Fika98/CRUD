import React from 'react'
import './App.css'
import Form from './Form'

import ListContainer from './ListContainer'

import SearchBar from './SearchBar'


class App extends React.Component{

  state={
    masterList: [],
    searchTerm: ""
  }

  handleSearchTerm = (termFromChild) => {
    this.setState({
        searchTerm: termFromChild
        //[evt.target.name]:evt.target.value  and change termfromchild to evt
    })
  }

  decideWhichArrayToReturn = () => {
    let  anArray = this.state.masterList.filter((singleList) => {
         return singleList.list_name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
         //add another || singleList.items.some(item=>item.name.includes(this.state.searchTerm))
    })
    return anArray
}



  componentDidMount(){
      fetch("http://localhost:3000/lists")
        .then(r => r.json())
        .then((allLists) => {
            this.setState({
                masterList: allLists
            })
        })
  }

  addOneList = (newListObj) => {
      let copyOfList = {...newListObj, contribution: 1}
      //create
      fetch("http://localhost:3000/lists",{
          method: "POST",
          headers:{
            "Content-Type": "Application/json"
          },
          body: JSON.stringify(copyOfList)
      })
        .then(r => r.json())
        .then((newCreatedList) => {
        //modify state
            let copyOfMasterList = [...this.state.masterList, newCreatedList]
            this.setState({
                masterList: copyOfMasterList
            })
        })
  }
            //delete
  deleteAlist = (idOfListToDelete) => {
    fetch(`http://localhost:3000/lists/${idOfListToDelete}`, {
        method: "DELETE"
    })
        .then(r => r.json())
        .then((deletedList) => {
            //Here is how you modify state
            //keep if - keep the item in the masterList if thier id does not match the one we delete it. 
            let copyOfMasterList = this.state.masterList.filter((singlelIST) => {
                return singlelIST.id !== deletedList.id  //or idOfListToDelete
            })
            this.setState({
                masterList: copyOfMasterList
            })
        })
  }

            //UPDATE ONE LIST
            //id and what key and value 
    updateOneList = (listId, newContributionValue) => {
        fetch(`http://localhost:3000/lists/${listId}`, {
        method: "PATCH",
        headers:{
            "Content-Type": "Application/json"
        },
        body: JSON.stringify({
            contribution: newContributionValue
            //or newContributionValue
        })
    })
        .then(r => r.json())
        .then((updatedList) => {
            console.log(updatedList)
                //here is how you modfiy state
            let copyOfMasterList = this.state.masterList.map((singleList) => {
                // return (singleList.id === updatedList.id ? updatedList : singleList)
                if(singleList.id === updatedList.id) {
                    return updatedList
                }else {
                    return singleList
                }
            })
            this.setState({
                masterList: copyOfMasterList
            })
        })
    }

                        //itemCreate nested 
    // newlyCreatedItem => {id: 9, name: "CC", list_id: 2}
    addItemToOneList = (newlyCreatedItem) => {
        let foundList = this.state.masterList.find((list) => {
            return list.id === newlyCreatedItem.list_id //=>{id: 2, list_name: "Chicken that won an Oscar", contribution: 784, items: Array(8)}
        })
        let copyOfItemsFromFoundList = [...foundList.items, newlyCreatedItem]  //=> (9) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {newlyCreatedItem}]
        let coptOfFoundList = {...foundList, items: copyOfItemsFromFoundList} //=> {id: 2, list_name: "Chicken that won an Oscar", contribution: 784, items: Array(9)}
        
                    //change entire masterList 
        let copyOfMasterList = this.state.masterList.map((singleList) =>{
            return (singleList.id === coptOfFoundList.id ? coptOfFoundList : singleList)
        })
        // debugger
        this.setState({
            masterList: copyOfMasterList
        })

    }
  
    


  render() {
    // console.log(this.decideWhichArrayToReturn()) => [{...}]
    // console.log(this.decideWhichArrayToReturn())
        console.log(this.state.masterList)
    return (
      <div className="App">
        <h1>Listings</h1>
        <Form
            addOneList={this.addOneList}
        />
        <SearchBar
            searchTerm={this.state.searchTerm}
            handleSearchTerm={this.handleSearchTerm}
        />
        <ListContainer 
            title="Lists Of lists!"
            lists={this.decideWhichArrayToReturn()}
            deleteAlist={this.deleteAlist}
            updateOneList={this.updateOneList}
            addItemToOneList={this.addItemToOneList}
        />
    
      </div>
    );
  }
}

export default App;














//functional components
  // needs to return One bit of JSX
  //you have access to props via the first argument of that function 


  

//class components 
  //needs to extend React.Component
  //needs to have a render function
  //need to return one bit of JSX
  //you have access to props via this.props
