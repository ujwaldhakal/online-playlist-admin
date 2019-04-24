import React from 'react'
import PlaylistList from './PlaylistList'

interface State {
    youtubelink: string;
};

class Cabin extends React.Component<{}, State> {

    constructor(props: any) {
        super(props);
        this.state = {
            youtubelink: ""
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>

                <h1>Its where the dj plays the music</h1>

                <PlaylistList/>
            </div>
        );
    }
}

export default Cabin;
