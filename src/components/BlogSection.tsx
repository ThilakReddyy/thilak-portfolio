import { ArrowUpRight, BookOpen } from "lucide-react";

const articles = [
  {
    title: "How I scaled JNTUH Results to 22K+ API calls daily",
    description:
      "A practical account of evolving the backend through caching, asynchronous processing, queues, and production deployment.",
    href: "https://thilakreddy.medium.com/how-i-scaled-jntuh-results-vercel-from-a-simple-script-to-22k-api-calls-daily-e3e3052fff32",
    topic: "Architecture",
    credit: "Written by me",
  },
  {
    title: "Tree traversals in a single recursive pass",
    description:
      "A practical guide to producing preorder, inorder, and postorder traversals together.",
    href: "https://www.geeksforgeeks.org/dsa/pre-order-post-order-and-in-order-traversal-of-a-binary-tree-in-one-traversal-using-recursion/",
    topic: "Algorithms",
    credit: "Contribution linked from my GitHub profile",
  },
  {
    title: "How to build automation projects with Postman",
    description:
      "Using collections and workflows to turn repeatable API tasks into useful automations.",
    href: "https://www.geeksforgeeks.org/websites-apps/how-to-make-automation-projects-using-postman/",
    topic: "Automation",
    credit: "Contribution linked from my GitHub profile",
  },
];

const BlogSection = () => (
  <section id="writing" className="notes-section section-pad section-anchor">
    <div className="shell">
      <div className="notes-heading">
        <div>
          <p className="section-kicker">Technical writing</p>
          <h2>Lessons and contributions.</h2>
        </div>
        <BookOpen size={34} aria-hidden="true" />
      </div>

      <div className="notes-list">
        {articles.map((article, index) => (
          <a
            key={article.href}
            href={article.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="note-index">0{index + 1}</span>
            <span className="note-topic">{article.topic}</span>
            <span className="note-copy">
              <strong>{article.title}</strong>
              <small>{article.description}</small>
              <small className="note-credit">{article.credit}</small>
            </span>
            <ArrowUpRight size={21} aria-hidden="true" />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
