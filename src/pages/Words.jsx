import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import { getAllPosts } from '../lib/posts'

function Words() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen bg-[#FFF9F2] text-[#383631]">
      <Nav />

      <section className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-5 pb-8 pt-3 sm:gap-10 sm:px-8 sm:pb-10 sm:pt-4 lg:gap-[75px] lg:px-[30px] lg:pb-[30px] lg:pt-[60px]">
        <ul className="flex flex-col gap-6 sm:gap-8 lg:gap-[50px]">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                to={`/words/${post.slug}`}
                className="block max-w-[20ch] text-[32px] font-normal leading-[1] tracking-[0] transition-opacity hover:opacity-70 sm:max-w-[24ch] sm:text-[44px] lg:max-w-none lg:text-[69px]"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Words
