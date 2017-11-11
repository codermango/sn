import React from 'react';
import { withStyles } from 'material-ui/styles';
import List, {
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import FolderIcon from 'material-ui-icons/Folder';
import Chip from 'material-ui/Chip';


const styles = {
  item: {
    borderBottom: '1px solid #e2e2e2',
    textAlign: 'left'
  },
  price: {
    minWidth: '90px',
    backgroundColor: '#aab0c6',
    color: '#fff',
    fontWeight: '700'
  }
};

function RentalListItem(props) {
  const { data, classes } = props;
  return data ? (
    <ListItem className={classes.item} button>
      <ListItemAvatar>
        <Avatar>
          <FolderIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={data.title}
        secondary={data.detail.address}
      />
      <Chip label={`${data.detail.price}kr`} className={classes.price} />
    </ListItem>
  ) : '';
}

RentalListItem.propTypes = {

};

export default withStyles(styles)(RentalListItem);
