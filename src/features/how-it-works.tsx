import React from 'react'
import List, {ListItem} from '../_components/list'
import SectionHeadline from '@/_components/section-headline'

function HowItWorks() {
  return (
    <section className='py-2 sm:py-16'>
      <SectionHeadline styles="py-4 sm:py-16" title="How renting your items work?"></SectionHeadline>
        <List>
            <ListItem count={1}
                primary="List your item for free"
                secondary="Yes, that&apos; right! There is no fee to list your items."/>
            <ListItem count={2}
                primary="List your item for free"
                secondary="You are in complete control of the pricing."/>
            <ListItem count={3}
                primary="List your item for free"
                secondary="Earn while you sit on a beach or go on a vacation."/>
        </List>
    </section>
  )
}

export default HowItWorks