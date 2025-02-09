import React from 'react'
import { Link } from 'react-router-dom'

function Recipecard() {
    return (
        <div>
            <div class="card m-3" style={{width:"18rem"}}>
                <div class="card-body">
                    <h5 class="card-title">Recipe Title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Timing</h6>
                    <p class="card-text">Ingredients</p>
                    <p class="card-text">cooking instructions</p>
                    <Link href="#" class="btn btn-primary mx-2" to={"/view"}>View</Link>
                    <button class="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Recipecard
