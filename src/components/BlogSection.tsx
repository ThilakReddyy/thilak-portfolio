import { motion, useInView } from "framer-motion";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { useRef } from "react";

const articles = [
  {
    title: "How I scaled JNTUH Results to 22K+ API calls daily",
    description:
      "A practical account of evolving the backend through caching, asynchronous processing, queues, and production deployment.",
    href: "https://thilakreddy.medium.com/how-i-scaled-jntuh-results-vercel-from-a-simple-script-to-22k-api-calls-daily-e3e3052fff32",
    topic: "Architecture",
  },
  {
    title: "Tree traversals in a single recursive pass",
    description:
      "A practical guide to producing preorder, inorder, and postorder traversals together.",
    href: "https://www.geeksforgeeks.org/dsa/pre-order-post-order-and-in-order-traversal-of-a-binary-tree-in-one-traversal-using-recursion/",
    topic: "Algorithms",
  },
  {
    title: "How to build automation projects with Postman",
    description:
      "Using collections and workflows to turn repeatable API tasks into useful automations.",
    href: "https://www.geeksforgeeks.org/websites-apps/how-to-make-automation-projects-using-postman/",
    topic: "Automation",
  },
];

const BlogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="writing" className="section-padding section-anchor" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={false}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">
            Technical writing
          </p>
          <h2 className="mb-5 font-display text-3xl font-bold md:text-5xl">
            Lessons from <span className="text-gradient">building.</span>
          </h2>
          <p className="mb-12 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Architecture notes, algorithms, and practical lessons from building
            automation and operating real products.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {articles.map((article, index) => (
            <motion.a
              key={article.href}
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={false}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.15 + index * 0.08 }}
              className="group flex h-full flex-col rounded-2xl border border-glow bg-card p-6 transition-all duration-300 hover-glow"
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                  <BookOpen size={18} className="text-primary" aria-hidden="true" />
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                  aria-hidden="true"
                />
              </div>
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-primary">
                {article.topic}
              </p>
              <h3 className="mb-3 font-display text-xl font-semibold text-foreground">
                {article.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {article.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
