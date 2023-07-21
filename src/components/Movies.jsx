import {Movie} from './Movie'
function Movies(props){
    const {movies}=props;
    return <div className='movies'>{
        movies && movies.length>0 ? movies.map(movie => (
            <Movie key ={movie.imdbID} {...movie}/>
        )):
            <h3>Nothing found</h3>
    }
    </div>
}
export {Movies}
