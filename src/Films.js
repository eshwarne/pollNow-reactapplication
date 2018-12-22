import React, { Component } from 'react';
import './Films.css';
class Films extends Component {
    render(){
        const { films }=this.props;
        const filmList=films.map((film)=>{
            return (
                <div class="filmElement">
                <p class="title">Title : { film.name }</p>
                <p class="releasedYear">Released Year : {film.releasedYear }</p>
                <form>
                    <label>SELECT AN OPTION</label><br/>
                    <input type="radio" name="poll" value="Good"></input> GOOD <br></br>
                    <input type="radio" name="poll" value="Bad"></input> BAD <br></br>
                </form>
                </div>
            )
        })
        return(
            <div id="pollContainer">
            {filmList} 
            </div>
        )

    }
}
export default Films;