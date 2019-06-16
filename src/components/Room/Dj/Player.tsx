import React from 'react'
import YouTube from 'react-youtube';
import Playlist from './../../../entities/playlist'

interface State {
    songList: any
    currentSongToPlay: any
}

interface Props {
    props: any;
    room: any;
    songList: any
}

class Player extends React.Component<Props, State> {

    playlist: any;

    constructor(props: any) {
        super(props);
        this.onEnd = this.onEnd.bind(this);
        this.state = {
            songList: this.props.songList,
            currentSongToPlay: this.props.songList[0]
        }

        this.playlist = new Playlist();
    }

    async componentWillReceiveProps(props: any) {

        if (props.songList.length !== this.props.songList.length) {
            if(props.songList[0] !== undefined && props.songList[0].id !== undefined) {
                this.setState({currentSongToPlay: props.songList[0]})
                this.playlist.markAsCurrentPlaying(props.songList[0].id);
                console.log("1st time ok");
            }
        }
    }

    getYoutubeId(url: string): any {
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
        var match = url.match(regExp);
        return (match && match[7].length == 11) ? match[7] : false;
    }




    async playSong() {
        this.setState({currentSongToPlay: this.state.songList[0]})
        console.log(this.state.songList);
        console.log("checking for 1st value");
        // await this.playlist.markAsCurrentPlaying(this.state.songList[0].id);
    }

    async onEnd() {

        let data = this.state.songList,
            shouldPlayNextSong = false,
            self = this;

        await self.playlist.changeSong(this.state.currentSongToPlay.playlist_id, this.state.currentSongToPlay.id);
        // data.map(function (item: any) {
        //     if (item.is_playing) {
        //         item.is_playing = 0;
        //         shouldPlayNextSong = true;
        //         return item;
        //     }
        //
        //     if (!item.is_playing && shouldPlayNextSong) {
        //         item.is_playing = 1;
        //         shouldPlayNextSong = false;
        //         console.log("ok song has been changed");
        //         self.setState({currentSongToPlay: item});
        //         self.playlist.markAsCurrentPlaying(item.id);
        //     }
        //
        //     return item;
        //
        //
        // });
        //
        // this.setState({songList: data});

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
                    : "No song to play"}
            </div>
        )
    }
}


export default Player
