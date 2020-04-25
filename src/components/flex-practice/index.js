import React from 'react';
import Layout from '../layout';
const style = {
  display: 'flex',
  direction: 'col',
  justifyContent: 'space-between'

}

const foo = () => {
  return (
    <Layout>
      <div style={ style }>
        <p>first</p>
        <p>second</p>
        <p>third</p>
      </div>
    </Layout>
  )
}

export default foo;
  