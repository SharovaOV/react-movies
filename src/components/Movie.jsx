import React from 'react'
function Movie(props){
    const {
        Poster:poster,
        Title: title,
        Year: year,
        Type: type,
        imdbId: id
    } = props;
    return <div id={id} className='move card'>
        <div className="card-image">
            {
                (poster ==='N/A') ?
                    <img src= {`https://via.placeholder.com/300x450/258DC8/E0F6FD?text=${title}`} alt=""/>:
                    <img src={poster} alt={title}/>
            }
        </div>
        <div className="card-content">

            <span className="card-title">{title}</span>
            <p>"Year": {year}</p>
            <p>"Type": {type}</p>
        </div>
    </div>
}
export {Movie}