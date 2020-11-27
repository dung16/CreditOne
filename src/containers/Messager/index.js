import React, { Component } from 'react';
import {connect} from 'react-redux';
import Message from './../../component/Message';
class index extends Component {
    render() {
        var {messenger,alert} = this.props.messenger;
        return (
            <Message messenger={messenger} alert={alert}/>
        );
    }
}

const mapStateToProps = state =>{
    return{
        messenger:state.messenger
    }
}
const mapDispatchToProps=(dispatch,props)=>{
    return{
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(index);