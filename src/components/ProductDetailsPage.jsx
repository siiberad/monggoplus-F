import React from 'react';
import "../assets/css/Trx.css"
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from 'reactstrap';
import { Container } from 'reactstrap';
import classnames from 'classnames';
import '../assets/css/productdetail.css';
import axios from 'axios';
import CarouselProductDetail1 from './CarouselProductDetail1'
import ModalProductInvestasi from './ModalProductInvestasi';
import AppNavbar from './AppNavbar';
import AppFooter from './AppFooter';


class ProductDetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);

    this.state = {
      productModel: '',
      // productId: 1,
      activeTab: '1',
      products: []
    }
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  // ----------------------------------------------------------------

  componentDidMount() {
    const { match: { params } } = this.props;
    // let productId = this.state.productId;
    axios.get(`https://mgvplus.herokuapp.com/products/${params.proId}`).then(response => {
      const productId = response.data.productId;
      const productName = response.data.productName;
      const productPrice = response.data.productPrice;
      const returnOfInvestment = response.data.returnOfInvestment;
      const contractPeriodInMonth = response.data.contractPeriodInMonth;
      const jumlahTernak = response.data.jumlahTernak;
      const productDetails = response.data.productDetails;
      this.setState({ productName, productPrice, returnOfInvestment, contractPeriodInMonth, jumlahTernak, productDetails });
    });
  }

  render() {

    return (
      <div>
        <AppNavbar />
        <Container className="margin-form">
          <h2>{this.state.productName}</h2>
          <h4>{this.state.productPrice}</h4>
          <Row>
            <Col xs="6">
              <CarouselProductDetail/>
            </Col>
            <Col xs="6">
              <Nav tabs>
                <NavItem className="tab-product-detail">
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '1' })}
                    onClick={() => { this.toggle('1'); }}
                  >
                    Ringkasan
                  </NavLink>
                </NavItem>
                <NavItem className="tab-product-detail">
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '2' })}
                    onClick={() => { this.toggle('2'); }}
                  >
                    Rincian
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                  <Row>
                    <Col sm="12">
                      <a>
                        {this.state.products.map(product => <text>Periode Kontrak : {product.contractPeriodInMonth} <br />
                        </text>)}
                      </a>
                      <a>
                        Return yang didapat : {this.state.returnOfInvestment} % per periode <br />
                      </a>
                      <a>
                        Periode bagi hasil &emsp; &emsp;&ensp;: {this.state.contractPeriodInMonth} bulan <br />
                      </a>
                      <a>
                        Jumlah Ternak &emsp; &emsp; &emsp; &emsp; &emsp;: {this.state.jumlahTernak} ekor <br />
                      </a>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                  <Row>
                    <Col sm="12">
                      {this.state.productDetails}
                      {/* <Card body>
                        <CardTitle></CardTitle>
                        <CardText></CardText>
                        <Button></Button>
                      </Card> */}
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
          <br />
          <Row align="center">
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <ModalProductInvestasi />
            </Col>
          </Row>

        </Container>
        <AppFooter />
      </div>
    );
  }
}

export default ProductDetailsPage;
