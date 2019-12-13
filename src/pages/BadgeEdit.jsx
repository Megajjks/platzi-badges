import React from 'react';
import Badge from '../components/Badge';
import header from '../images/platziconf-logo.svg'
import BadgeForm from '../components/BadgeForm'
import './style/BadgeEdit.css';
import api from '../api'
import PageLoading from '../components/PageLoading'

class BadgeEdit extends React.Component{
    state = {
        loading: true,
        error: null,
        form: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: '',
    } };

    componentDidMount(){
        this.fetchData()
    }

    fetchData = async e =>{
        this.setState({loading: true, error:null})
        try{
            const data = await api.badges.read(
                this.props.match.params.badgeId //llamando la id a traves de la ruta pasada en badgeId gracias a react route
            )

            this.setState({loading:false, form:data})
        } catch (error){
            this.setState({loading:false, error:error})
        }
    }

    handleChange = (e) => {
        /* this.setState({
            form: {
                [e.target.name]: e.target.value, //aquí guardamos los datos que escucha el evento en los nombres de los campos correspondientes.
            },
        }); */ //Sobreescribe cada valor en vez de almacenarlos todos

        this.setState({
            form:{
                ...this.state.form, //dejamos caer todo el objeto que trae
                [e.target.name]: e.target.value, //añadimos o sobreescribimos ese objeto para no perderlo
            },
        });
    };
    
    handleSubmit = async e => {
        e.preventDefault();
        this.setState({ loading: true, error: null });
    
        try {
          await api.badges.update(this.props.match.params.badgeId, this.state.form);
          this.setState({ loading: false });
          this.props.history.push('/badges') //prop de react ruter que reciben las rutas, con esto lo podemos cambiar y dirigirnos a otras paginas
        } catch (error) {
          this.setState({ loading: false, error: error });
        }
    };

    render(){
        if(this.state.loading){
            return <PageLoading/>;
        }
        return(
            <React.Fragment>
                <div className="BadgeEdit__hero">
                    <img className="img-fluid BadgeEdit__hero-image" src={header} alt="logo"></img>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName={this.state.form.firstName || 'First Name'} 
                                lastName={this.state.form.lastName || 'Last Name'} 
                                jobTitle={this.state.form.jobTitle || 'Job Title'} 
                                twitter={this.state.form.twitter || 'Twitter'} 
                                email={this.state.form.email}
                                avatarUrl="https://api.adorable.io/avatars/270/lider proyectov.png"
                            />
                        </div>
                        <div className="col-6">
                        <h1>Edit Attendant</h1>
                            <BadgeForm 
                                onChange={this.handleChange} 
                                formValues={this.state.form}
                                onSubmit={this.handleSubmit}
                                error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeEdit; 