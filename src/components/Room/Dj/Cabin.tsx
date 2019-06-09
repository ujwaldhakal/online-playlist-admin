import React from 'react'
import PlaylistList from './PlaylistList'
import Player from './Player'
import Room from './../../../entities/room'
import RequestDj from "../AddSong";

interface State {
    youtubelink: string;
    songList: any,
    hasSongAdded : boolean
};

interface Props {
    room: any;
}

class Cabin extends React.Component<Props, State> {

    room: Room;

    constructor(props: any) {
        super(props);
        this.state = {
            youtubelink: "",
            songList: false,
            hasSongAdded: false,
        };
        this.room = new Room();
        this.songAdded= this.songAdded.bind(this);

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

        }
        console.log('old props' , this.props);
        console.log('new props' , props);
    }


    async songAdded() {
        await this.loadCurrentPlaylist();
    }

    render() {
        return (
            <div>
                {this.state.songList ?
                    <div>
                        <Player songList={this.state.songList} room={this.props.room} props={this.props}/>
                        <RequestDj room={this.props.room} songAdded={this.songAdded}/>
                        <PlaylistList songList={this.state.songList} room={this.props.room} hasSongAdded={this.state.hasSongAdded}/>
                    </div>

                    : false}
            </div>

        )

    }
}

export default Cabin;
