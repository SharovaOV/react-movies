import {Movies} from '../components/Movies'
import React from "react";
import {Preloader} from "../components/Preloader";
import {Search} from "../components/Search"

const API_KEY = process.env.REACT_APP_API_KEY;
class Main extends React.Component{
    constructor() {
        super();
        this.state = {
            movies: [],
            loading: true
        }
    }

    componentDidMount() {
        this.setMovies();

    }
    onSearch = (strSearch,type = 'all')=>{
        var str = !strSearch ? 'matrix': strSearch;
        this.setMovies( str, type);
    }

    setMovies = (strSearch = 'matrix',type = 'all')=>{
        this.setState({loading: true});
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${strSearch}${type !== 'all' ? `&type=${type}`:''}`).then(response => {
            if(response.ok) return response.json();
        }).then(data=>this.setState({movies: data.Search, loading: false}));
    }
    render() {
        const {movies, loading} = this.state;
        return <main className='conteiner content'>
            <Search  onSearch ={this.onSearch} onFilter={this.onSearch}/>
            {
                !loading ?
                    <Movies movies={movies}/>:
                    <Preloader/>
            }
        </main>
    }
}
export {Main};