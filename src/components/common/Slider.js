import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Button, Paper } from '@material-ui/core';
import PropType from 'prop-types';

const Item = props => (
  <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">
          Check it out!
      </Button>
  </Paper>
)

Item.propType = {
  item: PropType.object.isRequired,
}

function Example(props)
{
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]
 
    return (
        <Carousel>
            {
                items.map( (item, key) => <Item key={key} item={item} /> )
            }
        </Carousel>
    )
}
 
export default Example;

