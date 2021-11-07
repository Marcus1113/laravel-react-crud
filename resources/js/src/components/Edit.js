import React from 'react';
import AppContainer from "./AppContainer";

const Edit = () => {
    return (
        <div>
            <AppContainer title="EDIT POST">
                <form action="">
                    <div className="form-group">
                        <label>Title</label>
                        <input className="form-control" type="text"/>
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <textarea className="form-control"></textarea>
                    </div>

                    <div className="form-group">
                        <button type="button" className="btn btn-success">Save</button>
                    </div>
                </form>
            </AppContainer>
        </div>
    );
};

export default Edit;
