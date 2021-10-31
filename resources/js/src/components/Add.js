import React from 'react';
import AppContainer from "./AppContainer";

const Add = () => {
    return (
        <div>
            <AppContainer title="ADD POST">
                <form action="">
                    <div className="form-group">
                        <label>Title</label>
                        <input className="for-control" type="text"/>
                    </div>
                </form>

            </AppContainer>
        </div>
    );
};

export default Add;
