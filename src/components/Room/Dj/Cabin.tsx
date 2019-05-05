import React from 'react'
import PlaylistList from './PlaylistList'
import Player from './Player'
import Room from './../../../entities/room'

interface State {
    youtubelink: string;
};

interface Props {
    room: any;
}

class Cabin extends React.Component<Props, State> {


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
                <Player room={"Asd"} props={this.props}/>
                <PlaylistList/>
            </div>
        );
    }
}

export default Cabin;
