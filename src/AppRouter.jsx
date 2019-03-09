import React from 'react';
import {
    BrowserRouter as
    Router,
    Route
} from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import App from './App'
import ProductDetailsPage from './pages/ProductDetailsPage';
import TentangKami from './pagetentangkami/TentangKami';
import Bantuan from './pagebantuan/Bantuan';
import CaraKerja from './pagecarakerja/CaraKerja';
import TrxPage from './pages/TrxPage';
import AllProductPage from './pages/AllProductPage';
import ProfileEditPage from './pages/ProfileEditPage';
import Search from './searchpage/Search';
import AppResults from './searchpage/AppResults';
import AppLoginRegistState from './components/AppLoginRegistState';
import HomePages from './pages/HomePages';
import Investasi from './pageinvestasi/Investasi';
import ProductDetails1 from './components/productDetails1';
import ProductDetails2 from './components/productDetails2';
import ProductDetails3 from './components/productDetails3';
import ProductDetails4 from './components/productDetails4';
import ProductDetails5 from './components/productDetails5';
import ProductDetails6 from './components/productDetails6';
import ProductDetails7 from './components/productDetails7';
import ProductDetails8 from './components/productDetails8';
import ProductDetails9 from './components/productDetails9';

class AppRouter extends React.Component{
    render(){
        return(
            <div>
                <Router>
                    <LastLocationProvider>
                            <div>
                                <Route exact path='/' component={App}  />
                                <Route path='/tentangkami' component={TentangKami}  />
                                <Route path='/bantuan' component={Bantuan}  />
                                <Route path='/carakerja' component={CaraKerja}  />
                                <Route exact path='/allproduct' component={AllProductPage}  />
                                <Route path="/product-details" component={ProductDetails1} />
                        <Route path="/product-details/2" component={ProductDetails2} />
                        <Route path="/product-details/3" component={ProductDetails3} />
                        <Route path="/product-details/4" component={ProductDetails4} />
                        <Route path="/product-details/5" component={ProductDetails5} />
                        <Route path="/product-details/6" component={ProductDetails6} />
                        <Route path="/product-details/7" component={ProductDetails7} />
                        <Route path="/product-details/8" component={ProductDetails8} />
                        <Route path="/product-details/9" component={ProductDetails9} />
                        {/* <Route path="/product-details/:id" component={ProductDetailsPage} /> */}
                                <Route path='/transaction' component={TrxPage}  />
                                <Route path='/profile/edit' component={ProfileEditPage} />
                                <Route path='/search' component={Search} />
                                <Route path='/results' component={AppResults} />
                                <Route path='/homepage' component={HomePages} />
                                <Route path='/investasi' component={Investasi} />
                            </div>
                    </LastLocationProvider>
                </Router>
            </div>
        )
    }
}

export default AppRouter;