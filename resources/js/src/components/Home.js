import React from 'react';
import { Link } from 'react-router-dom';
import AppContainer from "./AppContainer";
import api from '../api';
import { useEffect } from 'react';


const Home = () => {
   
    useEffect(() => {
        api.getAllPosts().then(res => {
            console.log('test get all posts');
            console.log(res);
        })
    }, [])


    return (
       <AppContainer title="Laravel ReactJS -CRUD">
           <Link to="/add" className="btn btn-primary">ADD POST</Link>
           <div className="table-responsive">
               <table className="table table-striped mt-4">
                   <thead>
                   <tr>
                       <th>ID</th>
                       <th>Title</th>
                       <th>Description</th>
                       <th>Action</th>
                   </tr>
                   </thead>
                   <tbody>
                   <tr>
                       <td>1</td>
                       <td>Sample Title</td>
                       <td>Sample Description</td>
                       <td>
                        <Link to="/edit/1" className="btn btn-warning">EDIT</Link>
                        <a href="" className="btn btn-danger">DELTE</a>
                       </td>
                   </tr>
                   </tbody>
               </table>
           </div>
       </AppContainer>
    );
};

export default Home;
