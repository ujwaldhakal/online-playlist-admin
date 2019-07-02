import React from 'react'
import YouTube from 'react-youtube';
import Playlist from './../../../entities/playlist'
import Room from './../../../entities/room'
import {Button} from 'antd';

interface State {
    songList: any
    currentSongToPlay: any
    replayOption: boolean
}

interface Props {
    props: any;
    room: any;
    songList: any
}

class Player extends React.Component<Props, State> {

    playlist: any;
    room: any;

    constructor(props: any) {
        super(props);
        this.onEnd = this.onEnd.bind(this);
        this.state = {
            songList: this.props.songList,
            currentSongToPlay: this.props.songList[0],
            replayOption: false
        }

        this.room = new Room();
        this.playlist = new Playlist();
    }

    async componentWillReceiveProps(props: any) {

        console.log('checking via props');
        console.log(props.songList);
        console.log(this.props.songList.length);
        if (props.songList.length !== this.props.songList.length) {
            if (props.songList[0] !== undefined && props.songList[0].id !== undefined) {
                this.setState({currentSongToPlay: props.songList[0]})
                this.playlist.markAsCurrentPlaying(props.songList[0].id);
                console.log("1st time ok");
            }
        }
    }

    async componentDidMount() {
        await this.replayOption();
    }

    getYoutubeId(url: string): any {
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
        var match = url.match(regExp);
        return (match && match[7].length == 11) ? match[7] : false;
    }


    async playSong() {
        this.setState({currentSongToPlay: this.state.songList[0]})
        await this.playlist.markAsCurrentPlaying(this.state.songList[0].id);
    }

    async onEnd() {

        let self = this;

        await self.playlist.changeSong(this.state.currentSongToPlay.playlist_id, this.state.currentSongToPlay.id);

    }

    async replayOption() {
        // // console.log('checking type');
        // // console.log(typeof this.state.songList)
        if (!this.state.songList.length && !this.state.currentSongToPlay) {

            try {
                let data = await this.room.getCurrentPlaylist(this.props.room.id);
                console.log(data.data);
                if (data.data.length) {
                    this.setState({replayOption: true});
                }
            } catch (e) {
                console.log(e);

            }
            //
        }
    }

    replaySongs = () => {
        console.log("clicked");
    }


    renderReplaybutton() {

        return <button onClick={this.replaySongs}> Replay Songs </button>;
    }


    render() {
        const opts = {
            height: '390',
            width: '350',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        }
        return (
            <div>
                {this.state.songList && this.state.currentSongToPlay ?
                    <YouTube
                        className="room-video"
                        videoId={this.getYoutubeId(this.state.currentSongToPlay.link)}
                        opts={{
                            height: '390',
                            width: '640',
                            playerVars: { // https://developers.google.com/youtube/player_parameters
                                autoplay: 1
                            }
                        }}
                        onEnd={this.onEnd}
                    />
                    : this.state.replayOption ? this.renderReplaybutton() : "No songs to play"}
                    </div>
                    )
                }
                }


                export default Player
