import React from 'react';
import Input from '../components/InputComponent';

class InputContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todoText: ''
        }

        this.getTodoText = this.getTodoText.bind(this);
    }

    getTodoText(text) {
        const { addTodo } = this.props;
        addTodo(text);
    }

    render() {
        return (
            <Input
                getInputText={this.getTodoText}
            />
        );
    }
}

export default InputContainer;