import 'antd/dist/antd.css'
import React, { Component } from 'react';
import {
    Tabs,
    Layout,
    Input,
    Icon,
    Col,
    Row,
    Button,
} from 'antd';
const TabPane = Tabs.TabPane;
const { Header, Footer, Content } = Layout;
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
        };
    }
    emitEmpty = () => {
        this.userNameInput.focus();
        this.setState({ userName: '' });
    };
    onChangeUserName = (e) => {
        this.setState({ userName: e.target.value });
    };

    render() {
        const { userName } = this.state;
        const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
        const callback = (key) => {
            console.log(key);
        };

        return (
        <div>
            <Layout>
                <Header>Header</Header>
                <Content>
                    <Row>
                        <Col span={12} offset={6}>
                            <Tabs defaultActiveKey="1" onChange={callback}>
                                <TabPane tab="Регистрация" key="1">
                                    <Input
                                        placeholder="Enter your username"
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        suffix={suffix}
                                        value={userName}
                                        onChange={this.onChangeUserName}
                                        ref={node => this.userNameInput = node}
                                    />
                                    <Button type="primary">Submit</Button>
                                </TabPane>
                                <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                                <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                            </Tabs>
                        </Col>
                    </Row>
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        </div>
        );
    }
}

export default App;
