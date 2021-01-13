import React from 'react'

class Form extends React.Component{

    state = {
        //the keys of you state should match the name of your input
        list_name: "Favorite Place to Bingo",
    }

    handleAllInput = (evt) => {
        
        let {name, value} = evt.target
     
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (evt) =>{
        evt.preventDefault()
        this.props.addOneList(this.state)
    }

    render(){
        // console.log(this.props.creditCard("data from child"))
        // console.log(this.props.addOneList)

        return(
            <form className="form" onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input 
                type="text" 
                name="list_name" 
                id ="l_name"
                autoComplete="off"
                value={this.state.list_name}
                /* Value is state controlling the input */
                /* onChange is input controlling the state */
                onChange={this.handleAllInput}
                />
                <input type = "submit" value="Make a new list"/>
            </form>
        )
    }
}


export default Form


