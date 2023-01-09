import ListCard from './ListCard'
import './Publications.css'

const Publications = () => {
    return (
      <div className='Publications' id='publications'>
          <div className='Container'>
              <h2>My Publications</h2>
              <span className='Line'></span>
              <div className='Content'>
                <ListCard
                title={'The Temporal and Spatial Distribution of Health, Labor, and Agriculture Benefits of Climate Change Mitigation in the US'}
                content={<><p>Published in the Proceedings of the National Academy of Sciences on November 1, 2021</p></>}
                link={'https://www.pnas.org/doi/10.1073/pnas.2104061118'}/>
                <ListCard
                title={'Global Methane Assessment: Benefits and Costs of Mitigating Methane Emissions'}
                content={<><p>Published as an official document of the UN Environment Programme on May 6, 2021</p></>}
                link={'https://www.unep.org/resources/report/global-methane-assessment-benefits-and-costs-mitigating-methane-emissions'}/>
              </div>
          </div>
      </div>
    )
  }
  
  export default Publications