import React, { Component } from 'react';
class Films extends Component {
    render(){
        const { films }=this.props;
        const filmList=films.map((film)=>{
            return (
                <p>Title : { film.name }</p>
                <p>Released Year : {film.releasedYear }</p>
            )
        })
        return(
            <div className="filmElements"> {filmList} </div>
        )

    }
}
export default Films;