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

    getYoutubeId(url: string): any {
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
        var match = url.match(regExp);
        return (match && match[7].length == 11) ? match[7] : false;
    }

    getSongToPlay() {

    }

    onEnd() {

        let data = this.state.songList,
            shouldPlayNextSong = false,
            self = this;


        data.map(function (item: any) {

            if (item.is_playing) {
                item.is_playing = 0;
                shouldPlayNextSong = true;
                self.playlist.changeSong(item.playlist_id, item.id);
                return item;
            }

            if (!item.is_playing && shouldPlayNextSong) {
                item.is_playing = 1;
                shouldPlayNextSong = false;
                self.setState({currentSongToPlay: item});
            }

            return item;


        });

        this.setState({songList: data});

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
                    : false}
            </div>
        )
    }
}


export default Player
