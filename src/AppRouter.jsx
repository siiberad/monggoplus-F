import React from 'react';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';
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

class AppRouter extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    <div>
                        <Route exact path='/' component={App}  />
                        <Route path='/tentangkami' component={TentangKami}  />
                        <Route path='/bantuan' component={Bantuan}  />
                        <Route path='/carakerja' component={CaraKerja}  />
                        <Route path="/product-details" component={ProductDetailsPage} />
                        <Route path='/transaction' component={TrxPage}  />
                        <Route exact path='/profile/edit' component={ProfileEditPage} />
                        <Route exact path='/search' component={Search} />
                        <Route exact path='/results' component={AppResults} />
                        <Route exact path='/allproduct' component={AllProductPage}  />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default AppRouter;