import React from 'react'
import './Article.css'

// Pass image as a prop
const Article = ({imgURL,date,title}) => {
  // const image1 = "images/image1.jpg"
  // const image2 = "images/image2.jpg"
  // const image3 = "images/image3.jpg"
  // const image4 = "images/image4.jpg"
  // const image5 = "images/image5.jpg"
  return (
    <div className='gpt3__blog-container_article'>
      <div className='gpt3__blog-container_article-image'>
        <img src={imgURL} alt="" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article
