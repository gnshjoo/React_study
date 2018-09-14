import React, { Component } from 'react';
import PropsTypes from 'prop-types';
// props 검증을 위한 임포트?!

class MyComponent extends Component {
    static defaultProps = {
        name: '기본이름'
    }

    static propsTypes = {
        name: PropsTypes.string, //name 을 문자열로 설정
        age: PropsTypes.number.isRequired // 필수적으로 설정
    } 

    state = {
        number : 0
        // 이렇게 사용도 가능함
    }

    constructor(props) {
        super(props);
        // this.state = {
        //     number : 0
        // }
    }

    render() {
        return (
            <div>
                <p>안녕하세요 ! 제이름은 {this.props.name} 입니다.</p>
                <p>저는 {this.props.age}살 입니다.</p>
                <p>숫자 : {this.state.number}</p>
                <button onClick={ () => {
                    this.setState({
                        number: this.state.number +1
                    })
                }}>더하기</button>
            </div>
        );
    }
}

export default MyComponent;