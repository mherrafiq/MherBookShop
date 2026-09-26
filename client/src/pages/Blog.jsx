import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, User, ArrowRight, Tag, Search, Sparkles } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Must-Read Books of 2025",
    excerpt: "Discover the most talked-about books of the year — from gripping thrillers to inspiring memoirs and heartwarming fiction that will keep you up all night reading.",
    author: "Mher Editorial Team",
    date: "September 10, 2025",
    readTime: "5 min read",
    tag: "Book Lists",
    tagColor: "#818cf8",
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=900&auto=format&fit=crop&q=80",
    featured: true,
  },
  {
    id: 2,
    title: "How Reading 20 Minutes a Day Can Change Your Life",
    excerpt: "Science-backed benefits of daily reading — improved focus, empathy, vocabulary, and mental well-being. Here's how to build a habit that sticks.",
    author: "Ayesha Khan",
    date: "August 28, 2025",
    readTime: "4 min read",
    tag: "Lifestyle",
    tagColor: "#10b981",
    cover: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&auto=format&fit=crop&q=80",
    featured: false,
  },
  {
    id: 3,
    title: "Best Academic Books for Pakistan's Students in 2025",
    excerpt: "From FSc to O-Levels and beyond — a curated list of the most helpful textbooks every Pakistani student should have on their shelf.",
    author: "Usman Tariq",
    date: "August 15, 2025",
    readTime: "6 min read",
    tag: "Academic",
    tagColor: "#f59e0b",
    cover: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80",
    featured: false,
  },
  {
    id: 4,
    title: "Classic Pakistani Literature Every Reader Should Explore",
    excerpt: "Urdu literature holds timeless stories. We explore the iconic works of Manto, Ismat Chughtai, Faiz Ahmed Faiz, and more literary giants.",
    author: "Fatima Siddiqui",
    date: "July 30, 2025",
    readTime: "7 min read",
    tag: "Literature",
    tagColor: "#ec4899",
    cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&auto=format&fit=crop&q=80",
    featured: false,
  },
  {
    id: 5,
    title: "Building the Perfect Home Library on a Budget",
    excerpt: "You don't need to spend a fortune to own a beautiful book collection. Practical tips for curating a home library that reflects your personality.",
    author: "Ali Hassan",
    date: "July 12, 2025",
    readTime: "5 min read",
    tag: "Tips & Tricks",
    tagColor: "#a78bfa",
    cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&auto=format&fit=crop&q=80",
    featured: false,
  },
  {
    id: 6,
    title: "Children's Books That Inspire Creativity & Imagination",
    excerpt: "Introducing kids to the right books at the right age can spark lifelong curiosity. Our top picks for young readers aged 4 to 12.",
    author: "Mher Editorial Team",
    date: "June 25, 2025",
    readTime: "4 min read",
    tag: "Children",
    tagColor: "#06b6d4",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&auto=format&fit=crop&q=80",
    featured: false,
  },
];

const allTags = ["All", "Book Lists", "Lifestyle", "Academic", "Literature", "Tips & Tricks", "Children"];

const Blog = () => {
  const [activeTag, setActiveTag] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setVisible(true), 80);
  }, []);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesTag = activeTag === "All" || post.tag === activeTag;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  const showFeatured = activeTag === "All" && searchQuery === "";
  const featuredPost = blogPosts.find((p) => p.featured);
  const regularPosts = filteredPosts.filter((p) => !p.featured || !showFeatured);

  return (
    <div className={`blog-page ${visible ? "blog-visible" : ""}`}>

      {/* Hero */}
      <section className="blog-hero">
        <div className="blog-hero-inner">
          <div className="blog-hero-badge">
            <Sparkles size={14} />
            <span>MherBookShop Blog</span>
          </div>
          <h1 className="blog-hero-title">
            Stories, Tips &amp; <span className="blog-hero-gradient">Book Discoveries</span>
          </h1>
          <p className="blog-hero-subtitle">
            Explore reading guides, book recommendations, academic tips, and literary insights curated just for you.
          </p>
          <div className="blog-search-wrapper">
            <Search size={17} className="blog-search-icon" />
            <input
              type="text"
              className="blog-search-input"
              placeholder="Search articles…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="blog-search-clear" onClick={() => setSearchQuery("")}>✕</button>
            )}
          </div>
        </div>
      </section>

      {/* Tag Filter Bar */}
      <div className="blog-tags-bar">
        <div className="blog-tags-inner">
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`blog-tag-btn ${activeTag === tag ? "active" : ""}`}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="blog-content">

        {/* Featured Post */}
        {showFeatured && featuredPost && (
          <div className="blog-featured">
            <div className="blog-featured-img-wrap">
              <img src={featuredPost.cover} alt={featuredPost.title} className="blog-featured-img" />
              <div className="blog-featured-overlay" />
              <span className="blog-featured-label">
                <Sparkles size={12} /> Featured
              </span>
            </div>
            <div className="blog-featured-info">
              <span
                className="blog-post-tag"
                style={{ background: featuredPost.tagColor + "22", color: featuredPost.tagColor, borderColor: featuredPost.tagColor + "44" }}
              >
                <Tag size={11} /> {featuredPost.tag}
              </span>
              <h2 className="blog-featured-title">{featuredPost.title}</h2>
              <p className="blog-featured-excerpt">{featuredPost.excerpt}</p>
              <div className="blog-post-meta">
                <span><User size={13} /> {featuredPost.author}</span>
                <span className="meta-dot">·</span>
                <span><Clock size={13} /> {featuredPost.readTime}</span>
                <span className="meta-dot">·</span>
                <span>{featuredPost.date}</span>
              </div>
              <Link to="/" className="blog-read-more-btn">
                Read Article <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        )}

        {/* Posts Grid */}
        {filteredPosts.length === 0 ? (
          <div className="blog-empty">
            <BookOpen size={52} strokeWidth={1.2} />
            <h3>No articles found</h3>
            <p>Try a different keyword or tag filter.</p>
          </div>
        ) : (
          <>
            {regularPosts.length > 0 && (
              <div className="blog-grid-header">
                <h3 className="blog-section-label">
                  {showFeatured ? "More Articles" : `${filteredPosts.length} article${filteredPosts.length !== 1 ? "s" : ""} found`}
                </h3>
                <div className="blog-section-line" />
              </div>
            )}
            <div className="blog-grid">
              {regularPosts.map((post, i) => (
                <div
                  className="blog-card"
                  key={post.id}
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="blog-card-img-wrap">
                    <img src={post.cover} alt={post.title} className="blog-card-img" />
                    <div className="blog-card-img-overlay" />
                    <span
                      className="blog-post-tag card-tag"
                      style={{ background: post.tagColor + "22", color: post.tagColor, borderColor: post.tagColor + "44" }}
                    >
                      <Tag size={10} /> {post.tag}
                    </span>
                  </div>
                  <div className="blog-card-body">
                    <h3 className="blog-card-title">{post.title}</h3>
                    <p className="blog-card-excerpt">{post.excerpt}</p>
                    <div className="blog-post-meta small">
                      <span><User size={12} /> {post.author}</span>
                      <span><Clock size={12} /> {post.readTime}</span>
                    </div>
                    <div className="blog-card-footer">
                      <span className="blog-card-date">{post.date}</span>
                      <Link to="/" className="blog-card-link">
                        Read More <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Newsletter CTA */}
      <div className="blog-newsletter-cta">
        <div className="blog-cta-glow" />
        <BookOpen size={36} className="blog-cta-icon" />
        <h2>Never Miss a Book Recommendation</h2>
        <p>Subscribe to our newsletter and get the latest articles, book lists, and exclusive offers straight to your inbox.</p>
        <Link to="/" className="blog-cta-btn">
          Browse Our Collection <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default Blog;
