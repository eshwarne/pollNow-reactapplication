import React from 'react';
import './Films.css';
const Films=(props)=>{
        const { films }=props;
        const filmList=films.map((film)=>{
            return (
                <div className="filmElement" key={ film.key }>
                <p className="title">Title : { film.name }</p>
                <p className="releasedYear">Released Year : {film.releasedYear }</p>
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
export default Films;