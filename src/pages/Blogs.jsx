import React from 'react'
import { Head } from 'vite-react-ssg'
import { Link } from 'react-router-dom'
import { blogs } from '../data/pageContents/blogs/blogs'
import Breadcrumbs from '../components/Breadcrumbs'
import HeroText from '../components/animations/HeroText'
import FadeInWhenVisible from '../components/animations/FadeInWhenVisible'
import RevealImage from '../components/animations/RevealImage'

export default function Blogs() {
  const publishedBlogs = blogs.filter(blog => blog.status === 'published');

  return (
    <div>
      <Head>
        <title>Journal | ULANDA</title>
        <meta name="description" content="Science-led insights on skin regeneration, menopause, and aesthetic medicine." />
      </Head>

      <div className="bg-[#FAF9F6] min-h-screen">
        {/* Hero Section */}
        <section className="relative pb-8 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto z-10 relative">
            <Breadcrumbs />
            <div className="mt- max-w-4xl">
              <HeroText 
                text="The Journal"
                className="font-serif text-5xl md:text-7xl text-gray-900 mb-6"
              />
              <FadeInWhenVisible>
                <p className="text-3xl font-serif font-medium leading-relaxed max-w-4xl">
                  <span className='italic text-primary'>Science-backed</span> insights into skin longevity, regenerative aesthetics, and the biological engines of youth.
                </p>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="px-6 pb-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {publishedBlogs.map((blog, index) => (
                <FadeInWhenVisible key={blog.id} delay={index * 0.1}>
                  <Link to={`/blogs/${blog.id}`} className="group block h-full">
                    <article className="flex flex-col h-full bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                      
                      {/* Image */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                        {(blog.images && blog.images.length > 0 ? blog.images[0] : blog.heroImage) ? (
                           <RevealImage className="w-full h-full">
                             <img 
                               src={blog.images && blog.images.length > 0 ? blog.images[0] : blog.heroImage} 
                               alt={blog.title}
                               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                             />
                           </RevealImage>
                        ) : (
                          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                            No Image
                          </div>
                        )}
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium tracking-wider uppercase text-gray-900 rounded-full">
                           Article
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-8 flex flex-col flex-grow">
                        <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                          <time dateTime={blog.date}>{blog.date}</time>
                          {blog.readTime && (
                            <>
                              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                              <span>{blog.readTime}</span>
                            </>
                          )}
                        </div>

                        <h3 className="font-serif text-2xl text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {blog.title}
                        </h3>

                        <p className="text-gray-600 font-light leading-relaxed mb-6 line-clamp-3 flex-grow">
                          {blog.subtitle}
                        </p>

                        <div className="flex items-center text-primary font-medium group/btn">
                          <span className="mr-2 group-hover/btn:mr-3 transition-all">Read Article</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </article>
                  </Link>
                </FadeInWhenVisible>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
