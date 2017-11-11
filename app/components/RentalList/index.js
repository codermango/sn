import React from 'react';
import List from 'material-ui/List';
import RentalListItem from 'components/RentalListItem';


function RentalList(props) {
  const { data, classes } = props;

  return (
    <List dense={false}>
      { data && data.map((item, index) => <RentalListItem key={index} data={item} />) }
    </List>
  );
}

RentalList.propTypes = {

};

export default RentalList;
