import React from "react";

class Search extends React.Component{
    constructor() {
        super();
        this.state = {
            search: '',
            type: 'all'
        }
    }

    onChecked = (e)=>{
            this.setState({type: e.target.value});
            this.props.onFilter(this.state.search, e.target.value);
    }
    onKeyPress =(e)=>{
        if(e.key === 'Enter')
            this.props.onSearch(this.state.search, this.state.type);
    }
    render() {
        return <div className="row">
            <div className="input-field">
                <input
                    placeholder="search"
                    type="search"
                    className="validate"
                    value={this.state.search}
                    onChange={e => this.setState({search: e.target.value})}
                    onKeyDown={this.onKeyPress}
                />

                <button
                    className="btn search-btn"
                    onClick={()=>this.props.onSearch(this.state.search, this.state.type)}
                >
                    Search
                </button>
            </div>
            <div className="filter">
                <label>
                    <input className="with-gap" name="typemovie" value='all' type="radio" checked={this.state.type === 'all'} onClick={this.onChecked}/>
                    <span>all</span>
                </label>
                <label>
                    <input className="with-gap" name="typemovie" value='movie' type="radio" checked={this.state.type === 'movie'} onClick={this.onChecked}/>
                    <span>movies</span>
                </label>
                <label>
                    <input className="with-gap" value='series' name="typemovie" type="radio" checked={this.state.type === 'series'} onClick={this.onChecked}/>
                    <span>series</span>
                </label>
                <label>
                    <input className="with-gap" name="typemovie" value='game' type="radio" checked={this.state.type === 'game'} onClick={this.onChecked}/>
                    <span>games</span>
                </label>
            </div>
        </div>
    }
}
export {Search}