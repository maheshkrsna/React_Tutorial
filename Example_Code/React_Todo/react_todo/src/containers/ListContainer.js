import React from 'react';
import ListItem from '../components/ListItemComponent';

class listContainer extends React.Component {
    constructor(props) {
        super(props);
        this.onListItemClick = this.onListItemClick.bind(this);
    }

    onListItemClick(listIndex) {
        let { onListItemClick } = this.props;
        onListItemClick(listIndex);
    }

    render() {
        const { list } = this.props;
        const listItems = list.map((listItem, index) => {
            return <ListItem listIndex={index} key={index} onListItemClick={this.onListItemClick} listItem={listItem}></ListItem>
        });
        return (
            <ul>{listItems}</ul>
        );
    }
}

export default listContainer;