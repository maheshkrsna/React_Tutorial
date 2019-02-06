import React from 'react';

class ListItemComponent extends React.Component {
    constructor(props) {
        super(props);

        this.onListItemClick = this.onListItemClick.bind(this);
    }

    onListItemClick(event) {
        const { onListItemClick } = this.props;
        onListItemClick(event.currentTarget.dataset.id); 
    }

    render() {
        const { listIndex, listItem } = this.props;
        return (
            <li data-id={listIndex} onClick={this.onListItemClick}>{listItem}</li>
        );
    }
}

export default ListItemComponent;