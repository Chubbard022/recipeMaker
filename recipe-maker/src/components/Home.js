import React,{Component } from "react"
import '../App.css';

class Home extends Component{
    state = {

    }

    render(){
        return(
            <div><nav className = "navbarHome">
                <a>Login</a>
                <a>Logout</a>
                <a>Recipes</a>
                <a>Calender</a>
            </nav>
                <header>
                    <h1>Dinner Planner</h1>
                    <p>Dinner planner allows users to create recipes,plan weekly meal ideas all while making cooking and planning going hand in hand</p>
                </header>

            </div>
        )}
}

export default Home