import React from 'react';
import Layout from '../layout';
const style = {
  display: 'flex',
  direction: 'col',
  'justify-content': 'flex-end'
}

const foo = () => {
  return (
    <Layout>
      <div>
        <p>first</p>
        <p>second</p>
        <p>third</p>
      </div>
    </Layout>
  )
}

export default foo;
  