import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
`;

// const importBlog = async () => {
//   // https://webpack.js.org/guides/dependency-management/#requirecontext
//   const markdownBlogs = require
//     .context("../../content/blogs", false, /\.md$/)
//     .keys()
//     .map((relativePath) => relativePath.substring(2));

//   return Promise.all(
//     markdownBlogs.map(async (path) => {
//       const markdown = await import(`../../content/blogs/${path}`);
//       return {
//         ...markdown.attributes,
//         slug: path.substring(0, path.length - 3),
//       };
//     })
//   );
// };

// const Blog = ({ blogList }) => (
//   <Container>
//     <h1>Blog</h1>
//     <div className="blogs-container">
//       {blogList.map((blog) => {
//         <Link href="/blog/[slug]" as={`/blog/${blog.slug}`}>
//           <a>
//             <div key={blog.slug} className="blog">
//               <img src={blog.image} className="image" />
//               <div className="text">{blog.body}</div>
//             </div>
//           </a>
//         </Link>;
//       })}
//     </div>
//   </Container>
// );

// export async function getStaticProps() {
//   const blogList = await importBlog();
//   return {
//     props: {
//       blogList,
//     },
//   };
// }

// export default Blog;

const importBlogPosts = async () => {
  // https://webpack.js.org/guides/dependency-management/#requirecontext
  const markdownFiles = require
    .context("../../content/blogs", false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2));
  console.log(markdownFiles, "mdf");
  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../../content/blogs/${path}`);
      console.log(markdown);
      return {
        ...markdown.attributes,
        slug: path.substring(0, path.length - 3),
      };
    })
  );
};

const Blog = ({ postsList }) => (
  <Container>
    <h1>Blog</h1>
    <div className="blogs-container">
      {postsList.map((post) => (
        <div key={post.slug} className="blog">
          <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
            <a>
              <img src={post.image} className="image" />
              <div className="text">{post.title}</div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  </Container>
);

export async function getStaticProps() {
  const postsList = await importBlogPosts();
  console.log(postsList);
  return {
    props: {
      postsList,
    }, // will be passed to the page component as props
  };
}

export default Blog;
