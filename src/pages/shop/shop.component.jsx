import React, { Component } from 'react'
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import { selectCollections } from '../../redux/shop/shop.selectors'
import {connect} from 'react-redux'

const ShopPage = ({ collections }) => {



    return (
        <div className="shop-page">
            {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})


export default connect(mapStateToProps) (ShopPage);
