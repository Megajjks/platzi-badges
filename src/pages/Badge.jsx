import React from 'react';
import {Link} from 'react-router-dom';
import './style/Badges.css';
import logo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';
import MinLoader from '../components/MinLoader';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import api from '../api'
class Badge extends React.Component{

    state = {
        loading: true,
        error: null,
        data:undefined,
    };
    
    componentDidMount(){
        this.fetchDate(); //Función para hacer petición a la api
        this.intervalId = setInterval(this.fetchDate, 5000)
    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    fetchDate = async () =>{
        this.setState({loading: true, error: null})

        try{
            const data = await api.badges.list();
            this.setState({loading: false, data: data});
        } catch (error){
            this.setState({loading: false, error: error});
        }
    }

    render(){
        if(this.state.loading===true && !this.state.data){
         return <PageLoading/>       
        }

        if (this.state.error){
            return <PageError error={this.state.error}/>;
        }

        return(
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img src={logo} alt="logo platziConf" className="Badges_conf-logo"/>
                        </div>
                    </div>
                </div> 
                <div className="Badges__container">
                    <div className="Badge__buttons">
                        <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
                    </div>
                    <div className="Badges__list">
                        <div className="Badge__container">
                            <BadgesList badges={this.state.data}/>
                            {this.state.loading && <MinLoader/>}
                        </div>
                    </div>
                </div>       
            </React.Fragment>
        );
    }
}

export default Badge;
