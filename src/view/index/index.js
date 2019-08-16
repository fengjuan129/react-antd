import React ,{ Component }from 'react'
import { Layout, Icon } from 'antd';
import SiderBox from "./sider";
import routers from '../../router/index'
import {Link,Switch,Route} from 'react-router-dom'
import Home from '../home/home'
import buttonBox from '../general/button'
import iconBox from '../general/icon'

const { Header, Footer, Sider, Content } = Layout;


class Index extends Component{
   constructor(props){
       super(props);
       this.state={
         collapsed:false,
       }
   }
   // 组件加载完成   
   componentWillMount() {
   }
    //组件销毁 
    componentWillUnmount() {

    }

   collapseSider= ()=>{
       this.setState({
         collapsed:!this.state.collapsed
       })
   }
   render(){
       return (
           <Layout>
               <Sider collapsible collapsed={this.state.collapsed}>
                   <SiderBox></SiderBox>
               </Sider>
               <Layout>
                   <Header style={{background:'#e5e5e5'}}>
                       <Icon 
                          type={this.state.collapsed ?'menu-unfold':'menu-fold'}
                          onClick={this.collapseSider}
                        >

                       </Icon>
                   </Header>
                   <Content>
                       <div>ffff</div>
                        <Switch>
                            {/* {
                                routers.map((item,index)=>{
                                    return (
                                        <Route key={index} path={item.path} exact component={item.component}></Route>
                                    )
                               })
                            } */}
                             <Route exact path='/home' component={Home}/>
                             <Route path='/home/general/button' component={buttonBox}></Route>
                             <Route path='/home/general/icon' component={iconBox}></Route>
                        </Switch>
                   </Content>
                   <Footer>fonter</Footer>
               </Layout>
           </Layout>
       )
   }
}
export default Index;