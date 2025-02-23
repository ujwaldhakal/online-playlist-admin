import React from 'react';
import RequestDj from './../components/Room/AddSong'
import Cabin from '../components/Room/Dj/Cabin'
import Room from './../entities/room'
import '../components/Room/room.scss';
interface Props {
    props: any
}
interface State {
    room: any
}
class DjFloor extends React.Component<Props, State> {
    room: any
    constructor(props: any) {
        super(props);
        this.room = new Room();
        this.state = {
            room: false
        }

    }

    async componentDidMount() {
        try {
            let data = (await this.room.getBySlug(this.getSlug())).data[0];
            this.setState({room: data});

        } catch (e) {
            console.log(e);
        }
    }

    isRoomAdmin() {
        return true;
    }


    renderDjCabin() {
        if (this.isRoomAdmin()) {
            return true;
        }
    }

    getSlug(): string {

        return this.props.props.match.params.slug;
    }

    render() {
        return (
            <div>
                {this.state.room ?
                <div>
                    <div className="room-header">
                        <h1> Currently playing  </h1>
                    </div>
                    <div  className="room-cabin">
                        <Cabin room={this.state.room} />;
                    </div>
                </div> : null }
            </div>
        );
    }
}

export default DjFloor
