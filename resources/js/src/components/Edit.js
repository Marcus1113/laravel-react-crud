import React, { useState, useEffect } from 'react';
import { useHistory,useParams } from "react-router-dom";
import AppContainer from "./AppContainer";
import api from '../api';

const Edit = () => {
    const { id } = useParams();
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const onEditSubmit = async () => {
        setLoading(true);
        try {
            await api.updatePost({title, description}, id);
            history.push('/');
        }
        catch {
            alert('Failed to Edit post!');
        }
        finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        console.log(id);
        api.getOnePost(id).then(res => {
          const result = res.data;
          const post = result.data;

          setTitle(post.title);
          setDescription(post.description);
        })
    }, []);


    return (
        <div>
            <AppContainer title="Edit POST">
                <form action="">
                    <div className="form-group">
                        <label>Title</label>
                        <input className="form-control"
                               type="text"
                               value={title}
                               onChange={e => setTitle(e.target.value)}/>
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <textarea className="form-control"
                                  value={description}
                                  onChange={e => setDescription(e.target.value)}/>
                    </div>

                    <div className="form-group">
                        <button disabled={loading} type="button" className="btn btn-success" onClick={onEditSubmit}>
                            {loading ? 'LOADING...' : 'Edit'}
                        </button>
                    </div>
                </form>
            </AppContainer>
        </div>
    );
};

export default Edit;
