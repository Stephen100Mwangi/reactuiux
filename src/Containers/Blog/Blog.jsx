import React from 'react'
import Article from '../../Components/Article/Article'
import './Blog.css'

const Blog = () => {
  return (
    <div className='gpt3__blog sectionpadding'>
      <div className="gpt3__blog-heading">
        <h1 className='gradient_text'>A lot is happening.We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className="gpt3__blog-container-groupA">
          <Article imgURL="images/image002.jpg" date="02.09.2024" title="GPT-3 and Open AI is the future.Let us Explore how it is"></Article>
        </div>
        <div className="gpt3__blog-container-groupB">
          <Article imgURL="images/image001.jpg" date="02.09.2024" title="GPT-3 and Open AI is the future.Let us Explore how it is"></Article>
          <Article imgURL="images/image004.jpg" date="02.09.2024" title="GPT-3 and Open AI is the future.Let us Explore how it is"></Article>
          <Article imgURL="images/image3.jpg" date="02.09.2024" title="GPT-3 and Open AI is the future.Let us Explore how it is"></Article>
          <Article imgURL="images/image003.jpg" date="02.09.2024" title="GPT-3 and Open AI is the future.Let us Explore how it is"></Article>
        </div>

      </div>

    </div>
  )
}

export default Blog
