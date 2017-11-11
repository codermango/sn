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
    backgroundColor: '#4286f5',
    color: '#fff',
    fontWeight: '700'
  },
  title: {
    marginBottom: '10px'
  },
  detail: {
    display: 'flex'
  },
  detailItem: {
    height: '20px',
    margin: '0 5px',
    fontSize: '10px'
  }
};

function RentalListItem(props) {
  const { data, classes } = props;
  const title = data && data.title;
  const detail = data && data.detail;

  const address = detail && detail.address;
  const size = detail && detail.size.trim() && `${detail.size}㎡`;
  const roomNum = detail && detail.roomNum && `房间数：${detail.roomNum}`;
  const period = detail && detail.period;
  let periodText = '';
  if (period && period.startDate) {
    periodText = period.isLongTermRental ? `从${period.startDate}起长期` : `从${period.startDate}到${period.endDate}`;
  }

  const primaryText = title ? (
    <div className={classes.title}>{title}</div>
  ) : '';
  const secondaryText = detail ? (
    <div className={classes.detail}>
      { address && <Chip style={{marginLeft: "0"}} className={classes.detailItem} label={address} /> }
      { periodText && <Chip className={classes.detailItem} label={periodText} /> }
      { size && <Chip className={classes.detailItem} label={size} /> }
      { roomNum && <Chip className={classes.detailItem} label={roomNum} /> }
    </div>
  ) : '';
  return data ? (
    <ListItem className={classes.item} button>
      <ListItemAvatar>
        <Avatar>
          <FolderIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={primaryText}
        secondary={secondaryText}
        disableTypography={true}
      />
      <Chip label={`${data.detail.price}kr`} className={classes.price} />
    </ListItem>
  ) : '';
}

RentalListItem.propTypes = {

};

export default withStyles(styles)(RentalListItem);
