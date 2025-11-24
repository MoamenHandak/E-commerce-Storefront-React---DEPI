import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>
                An e-commerce platform is a software application that enables businesses to buy and sell products or services online. It provides a digital storefront where customers can browse, select, and purchase items, while also managing inventory, payments, and shipping logistics. E-commerce platforms often include features such as product catalogs, shopping carts, payment gateways, and customer management tools to facilitate seamless online transactions.
            </p>
            <p>
            E-commerce platforms can be hosted on the cloud or on-premises, and they cater to various business models, including B2C (business-to-consumer), B2B (business-to-business), and C2C (consumer-to-consumer). Popular examples of e-commerce platforms include Shopify, WooCommerce, Magento, and BigCommerce. These platforms empower businesses to reach a global audience, streamline operations, and enhance the overall shopping experience for customers.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox
