import Image from "next/image";
import Link from "next/link";
import Spline from "@splinetool/react-spline/next";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/app/lib/api";
import { PostPreview } from "./_components/post-preview";

export default function Home() {
  const allPosts = getAllPosts();

  const latestPosts = allPosts.slice(0, 3);
  return (
    <>
      <header className="crazy-3d-background">
        <Spline scene="https://prod.spline.design/CV0kdpZtWMWRd5AA/scene.splinecode" />
        <div className="width-container">
          <div className="text-on-3d">
            <h1>Experience Superior Online Presence</h1>
            <p className="hidden md:block">
              Whether you're starting from scratch or looking to revamp your
              current site, we have the expertise to turn your vision into
              reality. Contact us today to embark on a journey towards a
              powerful and visually stunning online presence.
            </p>
          </div>
        </div>
        {/* <div className="flex h-full items-center">
          <div className="width-container">
            <div className="flex w-full items-center">
              <div className="text-on-3d w-full lg:w-6/12">
                <h1>Experience Superior Online Presence</h1>
                <p className="hidden md:block">
                  Whether you're starting from scratch or looking to revamp your
                  current site, we have the expertise to turn your vision into
                  reality. Contact us today to embark on a journey towards a
                  powerful and visually stunning online presence.
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </header>
      <section className="pink-section">
        <div className="width-container">
          <div className="w-full pt-4 md:flex">
            <div className="w-full md:w-6/12 md:pr-10">
              <h2>Elevate your brand with our Website Development Service</h2>
              <Link className="btn" href={"/contact-us/"}>
                Contact Us
              </Link>
            </div>
            <p className="mt-10 w-full md:mt-0 md:w-6/12">
              In the dynamic landscape of the digital world, a robust online
              presence is pivotal for the success of any business. Our Website
              Development Service is tailored to empower your brand with a
              cutting-edge and seamlessly functioning website. At DMCS Ventures,
              we understand the intricate balance between aesthetic appeal and
              functionality, ensuring that your online platform not only looks
              impressive but also performs seamlessly.
            </p>
          </div>
        </div>
      </section>
      <section className="white-section">
        <div className="width-container">
          <ul className="info-tiles grid grid-cols-1 gap-6 text-center md:grid-cols-2 lg:grid-cols-4">
            <li>
              <Image
                src="/assets/tile-icons/responsive-design.svg"
                alt=""
                width={162}
                height={106}
              />
              <h3>Responsive Design</h3>
              <p>
                In an era where users access websites from various devices, we
                prioritize responsive design. Your website will look stunning
                and function flawlessly on desktops, tablets, and mobile phones
                alike.
              </p>
            </li>
            <li>
              <Image
                src="/assets/tile-icons/seo.svg"
                alt=""
                width={162}
                height={106}
              />
              <h3>SEO-Optimized</h3>
              <p>
                Enhance your online visibility with our SEO-friendly website
                structures. We implement best practices to optimize your website
                for search engines, driving organic traffic to your platform.
              </p>
            </li>
            <li>
              <Image
                src="/assets/tile-icons/tailored-solutions.svg"
                alt=""
                width={162}
                height={106}
              />
              <h3>Tailored Solutions</h3>
              <p>
                Our team of skilled developers takes a personalized approach to
                understand your business needs. We craft websites that are
                unique to your brand, reflecting your values and goals.
              </p>
            </li>
            <li>
              <Image
                src="/assets/tile-icons/scalability.svg"
                alt=""
                width={162}
                height={106}
              />
              <h3>Scalability</h3>
              <p>
                As your business grows, so should your website. Our development
                team builds scalable solutions, allowing your website to evolve
                seamlessly as your business expands.
              </p>
            </li>
          </ul>
        </div>
      </section>
      {/* blog section */}
      {latestPosts.length === 0 && <p>Oops! Could not fetch blog posts.</p>}
      <section className="pink-section">
        <div className="width-container">
          <ul className="article-tiles grid grid-cols-1 gap-6 text-center md:grid-cols-1 lg:grid-cols-3">
            {latestPosts.map((post) => (
              <li key={post.slug}>
                <PostPreview
                  key={post.slug}
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                  author={post.author}
                  slug={post.slug}
                  excerpt={post.excerpt}
                />
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Link className="btn" href={"/blog"}>
              Read All
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
