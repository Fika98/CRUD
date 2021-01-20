import React from 'react'

class Item extends React.Component {
  state = {
    nameOfNewItem: ""
    }

    handleNewInput = (evt) => {
        // console.log(evt.target.value)
        // let { name, value } = evt.target --
        this.setState({
            //[name]: value --
            [evt.target.name]: evt.target.value
            //nameOfNewItem: evt.target.value 
        })
    }

    handleSubmitOfNewItem = (evt) => {
        evt.preventDefault()
        fetch(`http://localhost:3000/lists/${this.props.itemId}/items`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: this.state.nameOfNewItem
            })
        })
            .then(r => r.json())
            .then((newItem) => {
                this.props.addItemToOneList(newItem)
            })
    }

    render() {
        //   console.log(this.props)
        return (
            <div className="itemDiv">
                <form onSubmit={this.handleSubmitOfNewItem}>
                    <input
                        type="text"
                        name="nameOfNewItem"
                        autoComplete="off"
                        value={this.state.nameOfNewItem}
                        onChange={this.handleNewInput}
                    />
                    <input
                        type="submit"
                        value="Add Item"
                        className="addItem"
                    />
                </form>
            </div>
        )
    }
}




export default Item