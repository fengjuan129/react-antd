// 侧边栏菜单导航
import React ,{ Component }from 'react'
import {Icon, Menu,Button,Switch } from 'antd';
import {Link} from 'react-router-dom'
const { SubMenu } = Menu;
class Sider extends Component{
    constructor(props){
        super(props);
        this.state={
          menuList:[],
          theme: 'dark',
          mode:'inline'
        }
    }
    // 组件加载完成   
    componentWillMount() {
        const menus = [
         {
           title: '首页',
           icon: 'home',
           key: '/home'
         },
         {
           title: '基本组件',
           icon: 'laptop',
           key: '/home/general',
           subs: [
             {key: '/home/general/button', title: '按钮', icon: '',},
             {key: '/home/general/icon', title: '图标', icon: '',},
           ]
         },
         {
           title: '导航组件',
           icon: 'bars',
           key: '/home/navigation',
           subs: [
             {key: '/home/navigation/dropdown', title: '下拉菜单', icon: ''},
             {key: '/home/navigation/menu', title: '导航菜单', icon: ''},
             {key: '/home/navigation/steps', title: '步骤条', icon: ''},
           ]
         },
         {
           title: '输入组件',
           icon: 'edit',
           key: '/home/entry',
           subs: [
             {
               key: '/home/entry/form',
               title: '表单',
               icon: '',
               subs: [
                 {key: '/home/entry/form/basic-form', title: '基础表单', icon: ''},
                 {key: '/home/entry/form/step-form', title: '分步表单', icon: ''}
               ]
             },
             {key: '/home/entry/upload', title: '上传', icon: ''},
           ]
         },
         {
           title: '显示组件',
           icon: 'desktop',
           key: '/home/display',
           subs: [
             {key: '/home/display/carousel', title: '轮播图', icon: ''},
             {key: '/home/display/collapse', title: '折叠面板', icon: ''},
             {key: '/home/display/list', title: '列表', icon: ''},
             {key: '/home/display/table', title: '表格', icon: ''},
             {key: '/home/display/tabs', title: '标签页', icon: '',},
           ]
         },
         {
           title: '反馈组件',
           icon: 'message',
           key: '/home/feedback',
           subs: [
             {key: '/home/feedback/modal', title: '对话框', icon: '',},
             {key: '/home/feedback/notification', title: '通知提醒框', icon: ''},
             {key: '/home/feedback/spin', title: '加载中', icon: '',}
           ]
         },
         {
           title: '其它',
           icon: 'bulb',
           key: '/home/other',
           subs:[
             {key: '/home/other/animation', title: '动画', icon: '',},
             {key: '/home/other/gallery', title: '画廊', icon: '',},
             {key:'/home/other/draft',title:'富文本',icon:''},
             {key:'/home/other/chart',title:'图表',icon:''},
             {key:'/home/other/loading',title:'加载动画',icon:''},
             {key:'/home/other/404',title:'404',icon:''},
             {key:'/home/other/springText',title:'弹性文字',icon:''},
           ]
         },
         {
           title: '关于',
           icon: 'info-circle-o',
           key: '/home/about'
         }
       ]
         this.setState({
             menuList:menus
         })
    }
     //组件销毁 
     componentWillUnmount() {
 
     }
     
     // 菜单渲染
     renderMenu=(data)=>{
         return data.map(item=>{
             if(item.subs){
               return (
                 <SubMenu
                 key={item.key}
                 title={
                   <span>
                      {item.icon && <Icon type={item.icon}/>}
                     <span>{item.title}</span>
                   </span>
                 }
                 >
                    {this.renderMenu(item.subs)}
                 </SubMenu>
               )
             }else{
                 return (<Menu.Item key={item.key}>
                     <Link to={item.key}>
                         {item.icon && <Icon type={item.icon}/>}
                         <span>{item.title}</span>
                     </Link>
                     
                 </Menu.Item>)
             }
         })
     }
    /**
     * 菜单主题切换
     */
    changeTheme = (value)=>{
        this.setState({
          theme:value?'dark':'light'
        })
    }
    /**
     * 菜单模式切换
     */
    changeMode = (value)=>{
        this.setState({
            mode:value?'inline':'vertical'
        })
    }
    render(){
        return (
            <div className='sider'>
                <div style={{height:'100vh'}}>
                    <div style={{background:'#e5e5e5',margin:'10px'}}>
                        <span style={{color:'#fff'}}>切换菜单主题</span>
                        <Switch
                            checked={this.state.theme === 'dark'}
                            onChange={this.changeTheme}
                            checkedChildren="Dark"
                            unCheckedChildren="Light"
                        />
                    </div>
                    <div style={{background:'#e5e5e5',margin:'10px'}}>
                        <span style={{color:'#fff'}}>切换菜单模式</span>
                        <Switch
                            checked={this.state.mode === 'inline'}
                            onChange={this.changeMode}
                            checkedChildren="Inline"
                            unCheckedChildren="Vertical"
                        />
                    </div>
                    <Menu  theme={this.state.theme} mode={this.state.mode}>
                    {this.renderMenu(this.state.menuList)}
                    </Menu>
                </div>
            </div>

        )
    }
 }
 export default Sider;