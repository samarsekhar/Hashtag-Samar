<AlertBox>
<h1>You have pending notifications</h1>
</AlertBox>

class AlertBox extends Component {
    render () {
        return <div className="alert-box">
        {this.props.children}
        </div>
    }
}

// Chilldren are passed as the children property.

