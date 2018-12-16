import * as React from "react";
import {Tabs, Button, Avatar,Table, Divider, Tag} from 'antd';

const TabPane = Tabs.TabPane;

const columns = [{
    title: 'Image Name',
    dataIndex: 'imageName',
    key: 'name',
    render: text => <a href="javascript:;">{text}</a>,
}, {
    title: 'Size(MB)',
    dataIndex: 'size',
    key: 'size',
}, {
    title: 'ImageId',
    dataIndex: 'imageid',
    key: 'imageid',
}, {
    title: 'Techs',
    key: 'techs',
    dataIndex: 'techs',
    render: tags => (
        <span>
      {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
    </span>
    ),
}, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
        <span>
      <a href="javascript:;">Edit</a>
      <Divider type="vertical" />
      <a href="javascript:;">Delete</a>
    </span>
    ),
}];

const data = [
    {
        key: '1',
        imageName: 'Ubuntu Image',
        size: 84,
        imageid: 'dsadasd54dsa54s',
        techs: ['gradle', 'java']
    },
    {
        key: '1',
        imageName: 'DataManagement',
        size: 150,
        imageid: 'dsadasd54dsa54s',
        techs: ['gradle', 'java', 'spring-boot']
    },
    {
        key: '1',
        imageName: 'Search',
        size: 180,
        imageid: 'dsadasd54dsa54s',
        techs: ['gradle', 'java', 'spring-boot','mysql','elastic-search']
    },
    {
        key: '1',
        imageName: 'Analytics',
        size: 182,
        imageid: 'dsadasd54dsa54s',
        techs: ['gradle', 'java', 'mongodb' ,'spring-boot']
    }
];

const operations = <Button>Extra Action</Button>;


class CreateMicroserviceComponent extends React.Component<any,any> {
    render() {
        return (
            <Tabs tabBarExtraContent={operations}>
                <TabPane tab="List" key="1">
                    <Table columns={columns} dataSource={data} />
                </TabPane>
                <TabPane tab="Create" key="2">Content of tab 2</TabPane>
            </Tabs>
        );
    }
}

export default CreateMicroserviceComponent;
