import React, { useState } from 'react';
import './Blog.css';

import blgImg1 from '../../assets/images/ai-generated-8519138_960_720 1.png';
import blgImg2 from '../../assets/images/ai-generated-7945684_960_720 1.png';
import visibility from '../../assets/images/visibility.svg';
import favourite from '../../assets/images/favorite.svg';

const Blog = () => {
    const [blogData, setBlogData] = useState([
        { img: blgImg1, title: 'Latest Trends and New', text: "Whether you're an , a developer, or a business seeking tech solutions...", btnText: 'Read More', views: 999, likes: 999 },
        { img: blgImg2, title: 'Latest Trends and New', text: "Whether you're an , a developer, or a business seeking tech solutions...", btnText: 'Read More', views: 999, likes: 999 },
        { img: blgImg1, title: 'Latest Trends and New', text: "Whether you're an , a developer, or a business seeking tech solutions...", btnText: 'Read More', views: 999, likes: 999 }
    ]);

    const handleViews = (index) => {
        const updatedBlogs = [...blogData];
        updatedBlogs[index].views++;
        setBlogData(updatedBlogs);
    };

    const handleLikes = (index) => {
        const updatedBlogs = [...blogData];
        updatedBlogs[index].likes++;
        setBlogData(updatedBlogs);
    };

    const formatCount = (count) => {
        if(count >= 1000){
            return (count / 1000).toFixed(1) + 'k';
        }else{
            return count.toString();
        }
    }

    return (
        <section className='container py-5' id='blog'>
            <div>
                <p className="highlight text-info">Latest Blog</p>
                <h2 className='text-white'>Tech Stories and Updates!</h2>
                <p className='text-white-50'>Our platform showcases the latest in tech trends, from AI and machine learning to cybersecurity, IoT, and beyond. Whether you're an enthusiast, a developer, or a business seeking tech solutions, our curated resources and insights empower</p>
            </div>

            <div className="row card-row mt-5">
                {blogData.map((blog, index) => (
                    <div className="col" key={index}>
                        <div className="card h-100">
                            <img src={blog.img} className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-white">{blog.title}</h5>
                                <p className="card-text text-white-50">{blog.text}</p>

                                <div className="row btn-row">
                                    <div className="col">
                                        <button type='button' className='btn card-btn text-white btn-sm' onClick={() => handleViews(index)}>{blog.btnText}</button>
                                    </div>
                                    <div className="col d-flex align-items-center">
                                        <button type='button' className='btn view-btn btn-sm'>
                                            <img src={visibility} alt="visibility-icon" />
                                        </button>
                                        <span className='text-white'>{formatCount(blog.views)}</span>
                                    </div>
                                    <div className="col d-flex align-items-center">
                                        <button type='button' className='btn like-btn btn-sm' onClick={() => handleLikes(index)}>
                                            <img src={favourite} alt="favourite-icon" />
                                        </button>
                                        <span className='text-white'>{formatCount(blog.likes)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Blog;
