'use client'
import { Table, TableColumnsType, Space, Button, Checkbox } from "antd";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Epts } from "./types";
import { SearchOutlined } from '@ant-design/icons';

export default function Home() {

  const url = "https://jsonplaceholder.typicode.com/users";
  //const [data, setData] = useState([])

  // const fetchEPTS = () => {
  //   axios.get(url).then((response) => {
  //     setData(response.data);
  //   }).catch(error => {
  //     console.error(error);
  //   });
  // }
    
  // useEffect(() => {
  //   fetchEPTS();
  // }, []);

  const rowSelection = {
    //columnTitle: <div>custom checkbox</div>,
    onChange: (selectedRowKeys: React.Key[], selectedRows: Epts[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: Epts) => ({
      name: record.column1,
    }),
  };

  const columns: TableColumnsType<Epts> = [
    // {
    //   title: "Can Do Y ", 
    //   key: "canDoY",
    //   width: 120,
    //   render: val => <Checkbox value={val}> </Checkbox>,
    //   fixed: 'left',
    // },
    {title: 'column1',dataIndex: 'column1',key: 'column1',width: 150 },
    {title: 'column2',dataIndex: 'column2',key: 'column2', width: 150, filters: [
      {
        text: 'column2',
        value: 'column2',
      },
      {
        text: 'column4',
        value: 'column4',
      },
    ],
    onFilter: (value, record) => record.column2.startsWith(value as string),
    filterSearch: true,},
    {title: 'column3',dataIndex: 'column3',key: 'column3', width: 150},
    {title: 'column4',dataIndex: 'column4',key: 'column4', width: 150},
    {title: 'column5',dataIndex: 'column5',key: 'column5', width: 150},
    {title: 'column6',dataIndex: 'column6',key: 'column6', width: 150},
    {title: 'column7',dataIndex: 'column7',key: 'column7', width: 150},
    {title: 'column8',dataIndex: 'column8',key: 'column8', width: 150},
    {title: 'column9',dataIndex: 'column9',key: 'column9', width: 150},
    {title: 'column10',dataIndex: 'column10',key: 'column10', width: 150},
    {title: 'column11',dataIndex: 'column11',key: 'column11', width: 150},
    {title: 'column12',dataIndex: 'column12',key: 'column12', width: 150},
    {title: 'column13',dataIndex: 'column13',key: 'column13', width: 150},
    {title: 'column14',dataIndex: 'column14',key: 'column14', width: 150},
    {title: 'column15',dataIndex: 'column15',key: 'column15', width: 150},
    {title: 'column16',dataIndex: 'column16',key: 'column16', width: 150},
    {title: 'column17',dataIndex: 'column17',key: 'column17', width: 150},
    {title: 'column18',dataIndex: 'column18',key: 'column18', width: 150},
    {title: 'column19',dataIndex: 'column19',key: 'column19', width: 150},
    {title: 'column20',dataIndex: 'column20',key: 'column20', width: 150},
    {title: 'column21',dataIndex: 'column21',key: 'column21', width: 150},
    {title: 'column22',dataIndex: 'column22',key: 'column22', width: 150},
    {title: 'column23',dataIndex: 'column23',key: 'column23', width: 150},
    {title: 'column24',dataIndex: 'column24',key: 'column24', width: 150},
    {title: 'column25',dataIndex: 'column25',key: 'column25', width: 150},
    {title: 'column26',dataIndex: 'column26',key: 'column26', width: 150},
    {title: 'column27',dataIndex: 'column27',key: 'column27', width: 150},
    {title: 'column28',dataIndex: 'column28',key: 'column28', width: 150},
    {title: 'column29',dataIndex: 'column29',key: 'column29', width: 150},
    {title: 'column30',dataIndex: 'column30',key: 'column30', width: 150},
    {title: 'column31',dataIndex: 'column31',key: 'column31', width: 150},
    {title: 'column32',dataIndex: 'column32',key: 'column32', width: 150},
    {title: 'column33',dataIndex: 'column33',key: 'column33', width: 150},
    {title: 'column34',dataIndex: 'column34',key: 'column34', width: 150},
    {title: 'column35',dataIndex: 'column35',key: 'column35', width: 150},
    {title: 'column36',dataIndex: 'column36',key: 'column36', width: 150},
    {title: 'column37',dataIndex: 'column37',key: 'column37', width: 150},
    {title: 'column38',dataIndex: 'column38',key: 'column38', width: 150},
    {title: 'column39',dataIndex: 'column39',key: 'column39', width: 150},
    {title: 'column40',dataIndex: 'column40',key: 'column40', width: 150},
    {title: 'column41',dataIndex: 'column41',key: 'column41', width: 150},
    {title: 'column42',dataIndex: 'column42',key: 'column42', width: 150},
    {title: 'column43',dataIndex: 'column43',key: 'column43', width: 150},
    {title: 'column44',dataIndex: 'column44',key: 'column44', width: 150},
  ];

  const dataSource: Epts[] = [];

  for (let i = 0; i < 10000; i++) {
    dataSource.push({
      //key: i,
    column1:`column${i}`,
    column2:`column${i}`,
    column3:`column${i}`,
    column4:`column${i}`,
    column5:`column${i}`,
    column6:`column${i}`,
    column7:`column${i}`,
    column8:`column${i}`,
    column9:`column${i}`,
    column10:`column${i}`,
    column11:`column${i}`,
    column12:`column${i}`,
    column13:`column${i}`,
    column14:`column${i}`,
    column15:`column${i}`,
    column16:`column${i}`,
    column17:`column${i}`,
    column18:`column${i}`,
    column19:`column${i}`,
    column20:`column${i}`,
    column21:`column${i}`,
    column22:`column${i}`,
    column23:`column${i}`,
    column24:`column${i}`,
    column25:`column${i}`,
    column26:`column${i}`,
    column27:`column${i}`,
    column28:`column${i}`,
    column29:`column${i}`,
    column30:`column${i}`,
    column31:`column${i}`,
    column32:`column${i}`,
    column33:`column${i}`,
    column34:`column${i}`,
    column35:`column${i}`,
    column36:`column${i}`,
    column37:`column${i}`,
    column38:`column${i}`,
    column39:`column${i}`,
    column40:`column${i}`,
    column41:`column${i}`,
    column42:`column${i}`,
    column43:`column${i}`,
    column44:`column${i}`,
    });
  }


  return (
    <div style={{height:' 90vh'}}>

      <div>
        <Space style={{ marginBottom: 16, paddingLeft: 20, paddingTop: 10 }}>
          <Button type="primary">Blah</Button>
          <Button icon={<SearchOutlined />}>Blahblah</Button>
          <Button>BlahblahBlahblah</Button>
        </Space>
      </div>
      
      <div>
        <Table 
          rowSelection={{
            type: 'checkbox',
            columnWidth: 48,
            ...rowSelection,
            
          }}
          virtual
          pagination={false}
            dataSource={dataSource} 
            columns={columns} 
            scroll={{ x: 1500, y: 900 }}
            rowKey="column1"
        />
      </div>
      
    </div>
  );
}
