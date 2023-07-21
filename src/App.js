import React from 'react'
import {Header} from './layout/Header'
import {Footer} from './layout/Footer'
import {Main} from './layout/Main'
export default class App extends React.Component {
    state = {
        movies: []
    };

    render() {
        const {movies} = this.state;
          return (
            <React.Fragment>
                <Header/>
                <Main movies ={movies}/>
                <Footer/>
            </React.Fragment>
          );
        }
}
