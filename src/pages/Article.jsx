import { Navigate, useParams } from 'react-router-dom'
import Nav from '../components/Nav'
import { formatDate, getPostBySlug } from '../lib/posts'

function Article() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) {
    return <Navigate to="/words" replace />
  }

  return (
    <main className="min-h-screen bg-[#FFF9F2] text-[#383631]">
      <Nav />

      <section className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-5 pb-8 pt-3 sm:gap-10 sm:px-8 sm:pb-10 sm:pt-4 lg:gap-10 lg:px-[30px] lg:pb-[30px] lg:pt-[60px]">
        <article className="mx-auto flex w-full max-w-[687px] flex-col gap-8 sm:gap-10">
          <h1 className="text-[32px] font-normal leading-[1] tracking-[0] sm:text-[44px] lg:text-[69px]">
            {post.title}
          </h1>

          <div className="flex items-center gap-[25px] text-[15px] uppercase leading-none tracking-[0] sm:text-[17px]">
            <span>{formatDate(post.date)}</span>
            <span>{post.readTime}min read</span>
          </div>

          <div
            className="font-['Dupincel'] text-[19px] font-light leading-[1.3] tracking-[0] sm:text-[22px] [&_p]:mb-[1.3em] [&_p:last-child]:mb-0"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>
      </section>
    </main>
  )
}

export default Article
