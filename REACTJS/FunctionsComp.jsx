function MyComonent({name}) {
    return <div className="message-box">
    Hello {name}
    </div>
}
// Functional components have no state.Also their props are passed as the first paramater to a function.

// Pure Components
import React, {PureComponent} from "react";

class MessageBox extends PureComponent {
    //
}

// Performance-optimized version of React.Component.Doesn't render if props/state has'nt chnaged.

// Component API
this.forceUpdate()

this.setState({ ... })
this.setState(state => { ... })

this.state
this.props
// These methods and properties are properties are available for Component instances.

