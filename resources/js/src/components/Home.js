import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AppContainer from "./AppContainer";
import api from '../api';

const Home = () => {

    const [posts, setPosts] = useState(null);

    const fetchPosts = () => {
        api.getAllPosts().then(res => {
            console.log('test get all posts');
            const result = res.data;
            setPosts(result.data);
        })
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    const renderPosts = () => {
        if(!posts){
            return (
                <tr >
                    <td colSpan="4">Loading posts....</td>
                </tr>
            );
        }
        if(posts.length === 0){

            return (
                <tr>
                    <td colSpan="4">There is no posts yet. Add one.</td>
                </tr>
            );
        }


        return posts.map((post) => (
            <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.description}</td>
                <td>
                    <Link className="btn btn-warning" to={`/edit/${post.id}`}>EDIT</Link>
                    <button type="button" className="btn btn-danger"
                            onClick={() => {
                                api.deletePost(post.id)
                                    .then(fetchPosts())
                                    .catch(err => {
                                   alert('Failed to delete post with id : '+ post.id);
                                });
                            }}
                    >DELETE</button>
                </td>
            </tr>
        ));
    }

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
                       {renderPosts()}
                   </tbody>
               </table>
           </div>
       </AppContainer>
    );
};

export default Home;
