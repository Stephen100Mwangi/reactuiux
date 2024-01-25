import React from 'react'
import './Features.css'
import Feature from '../../Components/Feature/Feature'

// An array of components
const featuresData = [
  {
    title:"Improving end distrusts instantly",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sint impedit laborum quos qui quibusdam consequatur voluptate aspernatur consectetur iste nisi in esse reiciendis harum delectus, debitis corrupti sed asperiores!"
  },
  {
    title:"Become the tended active",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sint impedit laborum quos qui quibusdam consequatur voluptate aspernatur consectetur iste nisi in esse reiciendis harum delectus, debitis corrupti sed asperiores!"
  },
  {
    title:"Message or am nothing",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sint impedit laborum quos qui quibusdam consequatur voluptate aspernatur consectetur iste nisi in esse reiciendis harum delectus, debitis corrupti sed asperiores!"
  },
  {
    title:"Reallly boy low county",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sint impedit laborum quos qui quibusdam consequatur voluptate aspernatur consectetur iste nisi in esse reiciendis harum delectus, debitis corrupti sed asperiores!"
  }
]

const Features = () => {
  return (
    <div className='gpt__features sectionpadding' id='features'>
      <div className='gpt__features-heading'>
        <h1 className='gradient_text'>The Future is Now and You Just Need To Realize it.Step into Future Today & Make it Happen</h1>
        <p>Request early access</p>
      </div>
      <div className='gpt__features--container'>
        {
          featuresData.map((item,index)=>(
            <Feature title={item.title} text={item.text} key={item.title}/>
          ))
        
        }

      </div>
    </div>
  )
}

export default Features