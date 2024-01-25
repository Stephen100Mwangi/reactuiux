import React from 'react'
import { RiAncientGateLine, RiDropboxFill, RiGoogleFill, RiShoppingBag2Fill, RiShoppingBag3Fill, RiShoppingBagFill, RiSlackFill } from 'react-icons/ri'

import './brand.css'

const Brand = () => {
  return (
    <div className='gpt__brand-icons'>
      <div>
        <RiGoogleFill/>
        Google
      </div>
      <div>
        <RiSlackFill/>
        Slack
      </div>
      <div>
        <RiAncientGateLine/>
        Atlession
      </div>
      <div>
        <RiDropboxFill></RiDropboxFill>
        Dropbox
      </div>
      <div>
        <RiShoppingBagFill/>
        Shopify
      </div>
    </div>
  )
}

export default Brand
