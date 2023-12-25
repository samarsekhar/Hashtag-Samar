Hello.defaultProps = {
    color: 'blue'
}

class Hello extends Component {
    constructor (props) {
        super (props)
        this.state = { visible: true}
    }
}

// Set the default in the constructor().
// And without constructor using Babel with proposal-class-fields.

class Hello extends Component {
    state = { visiblr: true}
}

// Setting the default state