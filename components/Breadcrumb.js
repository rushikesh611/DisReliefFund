import React from 'react'
import { Breadcrumb } from 'semantic-ui-react'
import { Link } from '../routes';

const BreadcrumbComponent = () => (
  <Breadcrumb>
    <Breadcrumb.Section link>
        <Link route="/">
                    <a className="item"> 
                        <p >Home</p>
                    </a>
				</Link>
    
    </Breadcrumb.Section>
    <Breadcrumb.Divider icon='right chevron' />
    <Breadcrumb.Section active>Campaign</Breadcrumb.Section>

  </Breadcrumb>
)

export default BreadcrumbComponent