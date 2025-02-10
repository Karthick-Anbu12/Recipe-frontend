import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import context from './Context'

function Recipecard({ data, index }) {
    const { deleterecipe } = useContext(context)
    return (
        <div>
            <div class="card m-3 max-h" style={{ width: "18rem", maxHeight: "25rem" }}>
                <div class="card-body overflow-scroll">
                    <h5 class="card-title">{data.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{data.time} Hour</h6>
                    <p class="card-text"><h6>Ingredients:</h6> {data.ingredients}</p>
                    <p class="card-text"><h6>Instruction: </h6>{data.instruction}</p>
                </div>
                <div className='d-flex justify-content-end m-2' >
                <Link href="#" class="btn btn-primary mx-2" to={`/view/${index}`}>View</Link>
                <button class="btn btn-danger" onClick={() => deleterecipe(index)}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Recipecard
