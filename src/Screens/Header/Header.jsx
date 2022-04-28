import React from 'react'
import './Header.css'
import { greeting } from './Greeting'
import { Image } from './Greeting'
function Header() {
  return (
    <div style={{ backgroundImage: `url(${Image})` }} className='header_container'>
      <div>
        <h1 className='heading'> {greeting} </h1>
        <p>
          Lorem ipsum dolor sit amet, sint admodum his ex. Eu mea molestie sensibus democritum, id aeque veritus ius. Fuisset senserit cotidieque eam ut, mei nibh scripserit ne, at pri liber praesent scribentur. No enim elit usu, eum commodo intellegat te, et brute verear duo.
    
          Cu magna placerat mediocritatem cum, idque possit te usu. Mutat aperiam delicatissimi in sea, quot quidam ei nam, ei duo everti eirmod postulant. Id eos feugait omittam interpretaris, id pro timeam bonorum, lorem molestie vivendum vis et. Tale aliquando tincidunt ei sea, case ornatus pro in. Ex nam autem molestie disputando, nobis discere civibus quo et.
    
          Invidunt sapientem ius et, mel ea simul tibique iracundia, viris libris vix ex. His ut iudico dictas option. Has illud maluisset reprimique te, ad propriae placerat moderatius vis, postulant ocurreret ad vis. Sea id debet inimicus argumentum, sale percipitur ea sed. Usu ad wisi mucius sapientem, vis ad molestiae evertitur omittantur, ut cum falli integre. Ei ius sensibus imperdiet scribentur, probo utroque accusata sit id. Mea te mentitum offendit, in vel diceret aliquid.
    
      </p>
      </div>
      <div>
        <p></p>
      </div>

    </div>
  )
}

export default Header
