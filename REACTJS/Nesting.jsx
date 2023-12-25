class Infoo extends Component {
    render () {
        const { avatar, username } = this.props

        retrun (
            <div>
            <UserAvatar src={avatar} />
            <UserProfile username={username} />
            </div>
        )
    }
}
export default Infoo;

// As of React v16.2.0 fragments can be used to return multiple children without adding extra wrapping nodes to the DOM.

import React, {Component, Fragment} from 'react';

class Info extends Component {
    render () {
        const { avatar, username } = this.props

        return (
            <Fragment>
            <UserAvatar src={avatar} />
            <UserProfile username={username} />
            </Fragment>
        )
    }
}
export default Info;

// Nest components to separate concerns.
