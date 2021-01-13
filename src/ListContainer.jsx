import React from 'react' 
import List from './List'





let ListContainer = (props) => {
    let arrayOfComponents = props.lists.map((singularListPOJO) => {
        
         return <List
                    // name={singularListPOJO.name}
                    lists={singularListPOJO}
                    key={singularListPOJO.id}
                    deleteAlist={props.deleteAlist}
                    updateOneList={props.updateOneList}
         />
    })

    return(
        <>
            <h2>{props.title}</h2>
            <ul>
            {
                arrayOfComponents
            }
            </ul>
        </>
    )
}

    //javascript interpolation {} accpet strings 

export default ListContainer