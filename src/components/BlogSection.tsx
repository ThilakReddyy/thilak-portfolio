import { motion, useInView } from "framer-motion";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { useRef } from "react";

const articles = [
  {
    title: "Tree traversals in a single recursive pass",
    description: "A practical guide to producing preorder, inorder, and postorder traversals together.",
    href: "https://www.geeksforgeeks.org/dsa/pre-order-post-order-and-in-order-traversal-of-a-binary-tree-in-one-traversal-using-recursion/",
    topic: "Algorithms",
  },
  {
    title: "How to build automation projects with Postman",
    description: "Using collections and workflows to turn repeatable API tasks into useful automations.",
    href: "https://www.geeksforgeeks.org/how-to-make-automation-projects-using-postman/",
    topic: "Automation",
  },
];

const BlogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="writing" className="section-padding" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">Writing</p>
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-5">
            Notes on <span className="text-gradient">Software</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mb-12">
            Occasional, practical writing about algorithms, APIs, and making software do the repetitive work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article, index) => (
            <motion.a
              key={article.href}
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group bg-card border border-glow rounded-2xl p-6 hover-glow transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <BookOpen size={18} className="text-primary" />
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </div>
              <p className="text-primary text-xs font-medium uppercase tracking-widest mb-3">{article.topic}</p>
              <h3 className="font-display font-semibold text-xl text-foreground mb-3">{article.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{article.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
