import React from 'react';

class listContainer extends React.Component {
    constructor(props) {
        super(props);
        this.onListItemClick = this.onListItemClick.bind(this);
    }

    onListItemClick(e) {
        let { onListItemClick } = this.props;
        onListItemClick(e.currentTarget.dataset.id);
    }

    render() {
        const { list } = this.props;
        const listItems = list.map((listItem, index) => {
            return <li data-id={index} key={index} onClick={this.onListItemClick}>{listItem}</li>
        });
        return (
            <ul>{listItems}</ul>
        );
    }
}

export default listContainer;