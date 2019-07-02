import React from 'react'
import PlaylistList from './PlaylistList'
import Player from './Player'
import Room from './../../../entities/room'
import RequestDj from "../AddSong";
import {connect} from "react-redux";
import Pusher from 'pusher-js';

interface State {
    youtubelink: string;
    songList: any,
    hasSongAdded : boolean
};

interface Props {
    room: any;
    user : any;

}

class Cabin extends React.Component<Props, State> {

    room: Room;
    socket : any;

    constructor(props: any) {
        super(props);
        console.log("this is here");
        console.log(this.props);
        this.state = {
            youtubelink: "",
            songList: false,
            hasSongAdded: false,
        };
        this.room = new Room();
        this.songAdded= this.songAdded.bind(this);
        let self = this;

        this.socket = new Pusher('d3f2886d77c3df491640', {
            encrypted: false,
            cluster: 'ap2'
        });

         this.bindSocketEvents();
    }

    async bindSocketEvents()
    {
        await this.detectSongAddEvent();
        await this.detectSongChangeEvent();
        await this.detectCurrentSongMarkedAsPlaying();
    }



    detectSongChangeEvent()
    {
        let self = this;
        const songChanged = this.socket.subscribe('song-changed');
        songChanged.bind('OP\\Playlist\\Events\\AutoSongChanged', async function (data : any) {
            console.log("caught this");
            await self.reloadPlaylistAfterTimeout();
        });
    }

    detectCurrentSongMarkedAsPlaying()
    {
        let self = this;
        const songChanged = this.socket.subscribe('marked-as-current-song-playing');
        songChanged.bind('OP\\Playlist\\Events\\SongPlayed', async function (data : any) {
            await self.reloadPlaylistAfterTimeout();
        });
    }

    reloadPlaylistAfterTimeout()
    {
        let self = this;
        setTimeout(
            async function() {
                await self.loadCurrentPlaylist();
            }
                .bind(self),
            1000
        );
    }

    detectSongAddEvent()
    {
        let self = this;
        const songAdded = this.socket.subscribe('song-added');
        songAdded.bind('OP\\Room\\Events\\SongAddedToDefaultPlaylist', async function (data : any) {
            console.log("catching added song");
            await self.reloadPlaylistAfterTimeout();
        });
    }


    async componentDidMount() {
        await this.loadCurrentPlaylist();
    }

    async loadCurrentPlaylist( )
    {
        try {
            let playlist = await this.room.getNotPlayedSongsFromCurrentPlaylist(this.props.room.id);
            console.log("data",playlist);
            this.setState({songList: playlist.data})
        } catch (e) {
            console.log(e);
        }
    }

    async componentWillReceiveProps(props: any) {
        if (props.hasSongAdded) {

        }
    }

    renderPlayer()
    {
        if(this.props.user.id === this.props.room.dj_id) {
            return <Player songList={this.state.songList} room={this.props.room} props={this.props}/>;
        }
    }


    async songAdded() {
        await this.loadCurrentPlaylist();
    }

    render() {
        return (
            <div>
                {this.state.songList ?
                    <div>
                        {this.renderPlayer()}
                        <RequestDj room={this.props.room} songAdded={this.songAdded}/>
                        <PlaylistList songList={this.state.songList} room={this.props.room} hasSongAdded={this.state.hasSongAdded}/>
                    </div>

                    : false}
            </div>
        )
    }
}

const mapStateToProps = (state: any) => ({
    user: state.user,
});

export default connect(mapStateToProps)(Cabin);
