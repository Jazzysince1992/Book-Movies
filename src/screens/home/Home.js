import React, {Component} from 'react';
import Header from '../../common/header/Header';
import '../home/Home.css';
import SimpleCard from '../home/Card'
class Home extends Component{
    render(){
        return(
            <div>
            <Header/>
            <h1 className="upcomingMovies">Upcoming Movies</h1>
            <SimpleCard/>
            </div>
        )
    }
}

export default Home;