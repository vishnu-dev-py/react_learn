import {useState} from 'react';
import {

    MenuUnfoldOutlined,
    HomeOutlined,
    AppstoreAddOutlined,
    IdcardOutlined,
    ShoppingOutlined,
    GiftOutlined,
    MehOutlined,
    TableOutlined,
    AppstoreOutlined,
    LockOutlined,
    UserOutlined,
    FieldTimeOutlined,
    WarningOutlined,
    QuestionCircleOutlined,
    WomanOutlined,
    DotChartOutlined,
    EnvironmentOutlined,
    FileTextOutlined,
    DribbbleSquareOutlined,

} from '@ant-design/icons';
import {Layout, Menu, theme, Image, Col, Row,} from 'antd';
import {genBorderlessStyle} from "antd/es/input/style/variants.js";

const {Header, Content, Footer, Sider} = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const style = {
    background: '#0092ff',
    padding: '8px 0',
};

const items = [
    getItem('Dashboard', '1', <HomeOutlined/>, [
        getItem('eCommerce', '2'),
        getItem('Alternate', '3'),

    ]),
    getItem('Widgets', '4', <AppstoreAddOutlined/>,
        [getItem('Data', '5'),
            getItem('Advance', '6'),
        ]),

    getItem('Cards', '7', <IdcardOutlined/>, [
        getItem('Basic', '8'),
        getItem('Advance', '9'),
        getItem('Contacts', '10'),
    ]),
    getItem('eCommerce', 'sub1', <ShoppingOutlined/>, [
        getItem('Add Product', '11'),
        getItem('products', '12'),
        getItem('Customers', '13'),
        getItem('Customer Details', '14'),
        getItem('Orders', '15'),
        getItem('Order Details', '16'),
    ]),
    getItem('Components', 'sub2', <GiftOutlined/>, [
        getItem('Alerts', '17'),
        getItem('Accordions', '18'),
        getItem('Badges', '20'),
        getItem('Button', '21'),
        getItem('Carousels', '22'),
        getItem('Media Objects', '23'),
        getItem('Modals', '24'),
        getItem('Navs & Tabs', '25'),
        getItem('Navbar', '26'),
        getItem('Pagination', '27'),
        getItem('Progress', '28'),
        getItem('Spinners', '29'),
        getItem('Notifications', '30'),
    ]),
    getItem('Icons', 'sub3', <MehOutlined/>, [
        getItem('Line Icons', '31'),
        getItem('Boxicons', '32'),
        getItem('Feather', '33'),
    ]),
    getItem('Forms', 'sub4', <MenuUnfoldOutlined/>, [
        getItem('Form Elements', '34'),
        getItem('Input Groups', '35'),
        getItem('Radios & Checkboxes', '36'),
        getItem('Form Layouts', '37'),
        getItem('Form Valid', '38'),
        getItem('Form Validation', '39'),
        getItem('Form Wizard', '40'),
        getItem('File Upload', '41'),
        getItem('Date Pickers', '42'),
        getItem('Select2', '43'),
        getItem('Form Repeater', '44'),

    ]),
    getItem('Tables', 'sub5', <TableOutlined/>, [
        getItem('Basic Table', '45'),
        getItem('Data Table', '46'),
    ]),
    getItem('Apps', 'sub6', <AppstoreOutlined/>, [
        getItem('Calendar', '47'),
        getItem('To Do', '48'),
        getItem('Invoice', '49'),
    ]),
    getItem('Authentication', 'sub7', <LockOutlined/>, [
        getItem('Basic', '50', null, [getItem('Login', '51'), getItem('Register', '53'), getItem('Forgot Password', '54'), getItem('Reset Password', '55')]),
        getItem('Cover', '56', null, [getItem('Login', '57'), getItem('Register', '58'), getItem('Forgot Password', '58'), getItem('Reset Password', '50')]),
        getItem('Boxed', '61', null, [getItem('Login', '62'), getItem('Register', '63'), getItem('Forgot Password', '64'), getItem('Reset Password', '65')]),
    ]),
    getItem('User Profile', 'sub8', <UserOutlined/>),
    getItem('Timeline', 'sub9', <FieldTimeOutlined/>),
    getItem('Pages', 'sub10', <WarningOutlined/>),
    getItem('FAQ', 'sub11', <QuestionCircleOutlined/>),
    getItem('Pricing', 'sub12', <WomanOutlined/>),
    getItem('Charts', 'sub13', <DotChartOutlined/>, [
        getItem('Apex', '66'),
        getItem('Chartjs', '67'),
    ]),
    getItem('Maps', 'sub14', <EnvironmentOutlined/>, [
        getItem('Google Maps', '68'),
        getItem('Vector Maps', '69'),
    ]),
    getItem('Menu Levels', 'sub15', <MenuUnfoldOutlined/>, [
        getItem('Level One', '70', null, [getItem('Level Two', '71', null, [getItem('Menu Three', '72')])]),

    ]),
    getItem('Documentation', 'sub16', <FileTextOutlined/>),
    getItem('Support', 'sub16', <DribbbleSquareOutlined/>),


];

const App = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer,},
    } = theme.useToken();
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical"/>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items}/>
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                />
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >

                    <Row
                        gutter={{
                            xs: 8,
                            sm: 16,
                            md: 24,
                            lg: 32,
                        }} justify="space-around" align="middle"
                    >
                        <Col className="gutter-row" span={8}>

                            <Image
                                width={500}
                                height={300}
                                src="https://public.bnbstatic.com/static/academy/uploads-original/b6c5a7383d0e482190d1d90688671d17.png"
                            />

                        </Col>

                        <Col className="gutter-row" span={16}>
                            <Image
                                width={1200}
                                height={300}
                                src="https://miro.medium.com/v2/resize:fit:1358/1*s9ek_V92S0QzzZFk5UsNPA.jpeg"
                            />
                        </Col>

                    </Row>

                    <Row
                        gutter={[12,24]} justify="space-around" align="middle"
                    >
                        <Col  span={8}>
                            <Row
                                gutter={[12,24]}
                            >
                                <Col  span={12}><Image
                                    width={200}
                                    height={300}
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2wbtLXVZnWOWSMOOa2GhRqm3f9hK0vcUZBg&usqp=CAU"
                                /></Col>
                                <Col  span={12}><Image
                                    width={200}
                                    height={300}
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2wbtLXVZnWOWSMOOa2GhRqm3f9hK0vcUZBg&usqp=CAU"
                                /></Col>

                            </Row>

                            <Row
                                gutter={{
                                    xs: 8,
                                    sm: 16,
                                    md: 24,
                                    lg: 32,
                                }} justify="space-around" align="middle"
                            >

                                <Image
                                    width={500}
                                    height={300}
                                    src="https://i0.wp.com/www.stockmaniacs.net/wp-content/uploads/2023/03/Buffett-Indicator.jpg?fit=1200%2C675&ssl=1"
                                />
                            </Row>

                        </Col>

                        <Col span={16}>
                            <Image
                                width={1200}
                                height={600}
                                src="https://www.bankrate.com/2022/08/24115227/what-is-market-volatility.jpeg?auto=webp&optimize=high&crop=16:9"
                            />
                        </Col>

                    </Row>


                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};
export default App;