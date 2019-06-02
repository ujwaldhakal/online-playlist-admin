import React from 'react'
import PlaylistList from './PlaylistList'
import Player from './Player'
import Room from './../../../entities/room'

interface State {
    youtubelink: string;
    songList: any
};

interface Props {
    room: any;
    hasSongAdded : any
}

class Cabin extends React.Component<Props, State> {

    room: Room;

    constructor(props: any) {
        super(props);
        this.state = {
            youtubelink: "",
            songList: false
        };
        this.room = new Room();
    }

    async componentDidMount() {
        await this.loadCurrentPlaylist();
    }

    async loadCurrentPlaylist( )
    {
        try {
            let playlist = await this.room.getCurrentPlaylist(this.props.room.id);
            this.setState({songList: playlist.data})
            console.log("setting state of new data");
        } catch (e) {
            console.log(e);
        }
    }

    async componentWillReceiveProps(props : any) {

        if(props.hasSongAdded) {
            await this.loadCurrentPlaylist();
        }
        console.log('old props' , this.props);
        console.log('new props' , props);
    }

    render() {
        return (
            <div>
                {this.state.songList ?
                    <div>
                        <Player songList={this.state.songList} room={this.props.room} props={this.props}/>
                        <PlaylistList songList={this.state.songList} room={this.props.room}/>
                    </div>

                    : false}
            </div>

        )

    }
}

export default Cabin;
