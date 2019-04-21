import React from 'react';
import AddSong from './../components/Room/AddSong'

class DjFloor extends React.Component {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <h1> Currently playing playlist </h1>
                </div>

                <div>
                    <AddSong/>
                </div>
            </div>
        );
    }
}


export default DjFloor

