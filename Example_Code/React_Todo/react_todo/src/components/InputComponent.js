import React from 'react';

class InputComponent extends React.Component {
    constructor(props) {
        super(props);
        this.keyPress = this.keyPress.bind(this);
    }

    keyPress(event) {
        if (event.keyCode === 13) {
            const data = event.target.value;
            const { getInputText } = this.props; 
            window.setTimeout(() => {
                getInputText(data);
                this.refs.inputElement.value = '';
            });
        }
    }

    render() {
        return (
            <input 
                onKeyDown={this.keyPress}
                placeholder='TODO'
                type="text"
                ref="inputElement"
            />
        );
    }
}

export default InputComponent;