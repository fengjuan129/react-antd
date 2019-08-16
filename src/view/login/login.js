import React ,{ Component }from 'react'
import { Form, Icon, Input, Button,Select} from 'antd';
import './login.scss'
class login extends Component{
    constructor(props) {
        super(props);
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            this.props.history.push('/')
          }
        });
    };
    render(){
        const { Option } = Select;
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 4 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 20 },
            },
          };
        
        return (
          <div className='login-container'>
            <Form  className='form-container' {...formItemLayout}>
                <Form.Item label="账号">
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: '请输入账号' }],
                        })(
                            <Input 
                            prefix={<Icon  type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>}
                            placeholder='账号'></Input>
                        )}
                    </Form.Item>
                <Form.Item label="密码">
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入密码' }],
                    })(
                        <Input 
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>}
                        help='请输入密码'
                        placeholder='密码' type="password"></Input>
                    )} 
                </Form.Item>
                <Button type="primary" onClick={this.handleSubmit}>
                   登录
                </Button>
               
            </Form>
            
          </div>
        );
    }
}
export default Form.create()(login);