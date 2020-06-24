import React  from 'react';
import Footer from '../layout/Footer';

// const Home = () => {
function Home(props) {
    // console.log(props)
    return (
        <div className="container">
            <div className="py-4">
                <div className="container">
                    <div className="card">
                        <div className="card-header">
                            <h1>This is Home page {props.text}.</h1>
                        </div>
                        <div className="card-body">
                            <h3>Hello, {
                                props.myname
                            }</h3>
                            <button className="btn btn-outline-primary" onClick={
                                () => {
                                    props.changeName("Monika")
                                }
                            }>Change it</button>
                            <p>element defines a part of text in an alternate voice or mood. The content inside is typically displayed in</p>
                        </div>
                        <div className="card-footer">
                            <Footer/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

// const mapStateToProps = (state) => {
//     return {myname: state.name}
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         changeName: (name) => {
//             dispatch({type: 'CHANGE_NAME', payload: name})
//         }
//     }
// }

export default Home;
