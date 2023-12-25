constructor(props) {
    super(props)
    this.state = { username: undefined }
}

this.setState({ username: 'sam' })

render () {
    this.state.username
    const { username } = this.state
}

// Use states (this.state) to manage dynamic data.
// With Babel ypu can use proposal-class-fields and get rid of constructor

class Hello extends Component {
    state = { username: undefined };

}

