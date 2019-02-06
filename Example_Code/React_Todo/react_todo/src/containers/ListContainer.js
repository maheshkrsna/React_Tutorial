import React from 'react';

class listContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { list } = this.props;
        const listItems = list.map((listItem, index) => {
            return <li key={index}>{listItem}</li>
        });
        return (
            <ul>{listItems}</ul>
        );
    }
}

export default listContainer;