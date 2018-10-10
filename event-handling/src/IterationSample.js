import React, { Component } from 'react';

class IterationSample extends Component {
    state = {
        names: ['눈사람', '얼음', '눈', '바람']
     }

     handleChange = (e) => {
         this.setState({
             name: e.target.value
         });
     }

     handleInsert = () => {
         this.setState({
            names: this.state.names.concat(this.state.name),
            name:''
         });
     }

     handleRemove = (index) => {
         //편의상 name의 레퍼런스를 미리 만든다.?!
         const { names } = this.state;

         /*

         */
        this.setState({
            names: [
                ...names.slice(0,index),
                ...names.slice(index+1, names.length)
            ]
        })
     }

    render() {
        const nameList = this.state.names.map(
            (name, index)=> (
            <li onDoubleClick={()=> this.handleRemove(index)} key={index}>{name}</li>
            )
        );

        return (
            <div>
                <input onChange={this.handleChange} value={this.state.name} />
                <button onClick={this.handleInsert}>추가</button>
                {nameList}
            </div>
        );
    }
}

export default IterationSample;