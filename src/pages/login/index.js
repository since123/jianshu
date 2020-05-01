import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { actionCreators } from './store'

class Login extends PureComponent {
	render() {
        const { loginStatus } = this.props;
        if(!loginStatus){
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder='账号' innerRef={(input) => {this.count = input}}/>
                        <Input placeholder='密码' innerRef={(input) => {this.passeord = input}}/>
                        <Button onClick={() => this.props.login(this.account, this.passeord)}>登陆</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }else{
            return <Redirect to="/" />
        }
	}
}

const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
});

const mapDispatch = (dispatch) => ({
	login(accountElem, passwordElem) {
        dispatch(actionCreators.login(accountElem, passwordElem))
    }
})

export default connect(mapState, mapDispatch)(Login);