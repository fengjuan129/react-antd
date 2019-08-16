import Loadable from 'react-loadable'
//标记： 在定义我们的路由对象，使用react-loadable 对路由组件进行懒加载，这是经常需要做的行为。

const loadable = (filename) => Loadable({
    loader:() => import(filename),
    loading:() => ('')
});
//路由配置对象
const routers = [
    {
        path:'/home',
        exact:true,
        component:loadable('')
    },
    {
        path:'/home/general/button',
        component:loadable('@/view/general/buttom')
    },
    {
        path:'/home/general/icon',
        component:loadable('@/view/general/icon')
    },
];
export default routers;
