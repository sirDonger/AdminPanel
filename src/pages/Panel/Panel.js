import React from "react";
import {Switch} from "react-router-dom";
import {Dashboard} from "../Dashboard/Dashboard";
import {ProductsContainer} from "../Products/ProductsContainer";
import {Suppliers} from "../Suppliers/Suppliers";
import {Settings} from "../Settings/Settings";
import {Errors} from "../Errors/Errors";
import {PrivateRoute} from "../../routes/PrivateRoute";
import {TabsContainer} from "../../components/Tabs/TabsContainer";
import {ProductDetails} from "../Products/ProductDetails";

export const Panel = () => {
    return (
        <div>
            <TabsContainer/>
            <Switch>
                <PrivateRoute path="/panel/dashboard" component={Dashboard}/>
                <PrivateRoute exact path="/panel/products" component={ProductsContainer}/>
                <PrivateRoute path="/panel/products/product/:id" component={ProductDetails}/>
                <PrivateRoute path="/panel/suppliers" component={Suppliers}/>
                <PrivateRoute path="/panel/settings" component={Settings}/>
                <PrivateRoute path="/panel/errors" component={Errors}/>
                {/*<Redirect from={'/panel'} to={'/dashboard'}/>*/}

            </Switch>
        </div>
    );
};
