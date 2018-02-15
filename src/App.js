import React, { Component } from 'react';
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
/*import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/SwipeableTabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';*/
import 'rc-tabs/assets/index.css';
import 'react-tabs/style/react-tabs.css';
/*const PanelContent = ({ id }) => (
    <div>{[1, 2, 3, 4].map(item => <p key={item}>{id}</p>)}</div>
);*/
class App extends Component {
/*    state = {
        activeKey: '',
        start: 0,
    };

    onChange = (activeKey) => {
        console.log(`onChange ${activeKey}`);
        this.setState({
            activeKey,
        });
    };

    onTabClick = (key) => {
        console.log(`onTabClick ${key}`);
        if (key === this.state.activeKey) {
            this.setState({
                activeKey: '',
            });
        }
    };

    tick = () => {
        this.setState({
            start: this.state.start + 10,
        });
    };*/

    render() {
        //const start = this.state.start;
        return (
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Welcome to React</h1>
            </header>
                <div className="Main">
                    <p className="App-intro">
                      To get started, edit <code>src/App.js</code> and save to reload.
                    </p>
                    {/*<Tabs
                        renderTabBar={() => <ScrollableInkTabBar onTabClick={this.onTabClick}/>}
                        renderTabContent={() => <TabContent animatedWithMargin />}
                        activeKey={this.state.activeKey}
                        onChange={this.onChange}
                    >
                        <TabPane tab={`tab ${start}`} key="1">
                            <PanelContent id={start} />
                        </TabPane>
                        <TabPane tab={`tab ${start + 1}`} key="2">
                            <PanelContent id={start + 1} />
                        </TabPane>
                        <TabPane tab={`tab ${start + 2}`} key="3">
                            <PanelContent id={start + 2} />
                        </TabPane>
                        <TabPane tab={`tab ${start + 3}`} key="4" disabled>
                            <PanelContent id={start + 3} />
                        </TabPane>
                    </Tabs>*/}
                    <Tabs>
                        <TabList>
                            <Tab>Title 1</Tab>
                            <Tab>Title 2</Tab>
                        </TabList>

                        <TabPanel>
                            <h2>Any content 1</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 2</h2>
                        </TabPanel>
                    </Tabs>
                </div>
          </div>
        );
    }
}

export default App;
