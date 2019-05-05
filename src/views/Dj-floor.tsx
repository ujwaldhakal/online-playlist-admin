import React from 'react';
import RequestDj from './../components/Room/AddSong'
import Cabin from '../components/Room/Dj/Cabin'
import Room from './../entities/room'

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
        // return this.room.dj_id === '123123'
        // this.room
        return true;
    }

    renderDjCabin() {

        if (this.isRoomAdmin()) {
            return <Cabin room={this.state.room}/>;
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
                    <div>
                        <h1> Currently playing playlist </h1>
                    </div>

                    <div>
                        {this.renderDjCabin()}
                        <RequestDj/>
                    </div>
                </div> : null }
            </div>
        );
    }
}


export default DjFloor

