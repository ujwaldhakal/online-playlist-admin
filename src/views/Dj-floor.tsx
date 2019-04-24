import React from 'react';
import RequestDj from './../components/Room/AddSong'
import Cabin from '../components/Room/Dj/Cabin'
import Room from './../entities/room'

interface Props {
    props: any
}

class DjFloor extends React.Component<Props, {}> {

    room: any

    constructor(props: any) {
        super(props);
        this.room = new Room();

    }

    async componentDidMount() {
        try {
            this.room = (await this.room.getBySlug(this.getSlug())).data[0];

        } catch (e) {

            console.log(e);
        }
        console.log('about to send some req');
    }

    isRoomAdmin() {
        // return this.room.dj_id === '123123'
        // this.room
        return true;
    }

    renderDjCabin() {

        if(this.isRoomAdmin()) {
            return <Cabin/>;
        }
    }

    getSlug(): string {
        return this.props.props.match.params.slug;
    }

    render() {
        return (
            <div>
                <div>
                    <h1> Currently playing playlist </h1>
                </div>

                <div>
                    {this.renderDjCabin()}
                    <RequestDj/>
                </div>
            </div>
        );
    }
}


export default DjFloor

