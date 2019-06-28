import React from 'react';
import { Table } from 'antd';

const TablePage = (props) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Company',
      dataIndex: 'company',
      key: 'company',
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      company: 'asbdhais sad',
    },
    {
      key: '2',
      name: 'Rjaisdh jauish',
      company: 'asdaokji',
    },
  ];
  console.log(props);
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default TablePage;
