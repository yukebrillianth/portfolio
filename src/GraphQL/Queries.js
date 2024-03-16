import { gql } from "@apollo/client";

// export const GET_BLOG_POSTS = gql`
//     query GetBlogPosts($first: Int) {
//         posts(first: $first) {
//         slug
//         title
//         coverImage {
//             url(transformation: {document: {output: {format: webp}}, image: {resize: {width: 720}}})
//         }
//         date
//         excerpt
//         category {
//             slug
//             title
//           }
//         }
//     }
// `;

export const GET_BLOG_POSTS = gql`
  query GetBlogPosts($first: Int) {
    publication(host: "yukebrillianth.hashnode.dev") {
      title
      posts(first: $first) {
        edges {
          node {
            slug
            title
            coverImage {
              url
            }
            publishedAt
            brief
            tags {
              name
              slug
            }
          }
        }
      }
    }
  }
`;

export const SEARCH_BLOG_POSTS = gql`
  query SearchBlogPosts($query: String) {
    posts(where: { _search: $query }) {
      slug
      title
      coverImage {
        url(
          transformation: {
            document: { output: { format: webp } }
            image: { resize: { width: 720 } }
          }
        )
      }
      date
      excerpt
      category {
        slug
        title
      }
    }
  }
`;
export const SEARCH_BLOG_POSTS_WITH_CATEGORY = gql`
  query SearchBlogPosts($query: String, $category: String) {
    posts(
      where: {
        _search: $query
        OR: { category: { title_contains: $category } }
      }
    ) {
      slug
      title
      coverImage {
        url(
          transformation: {
            document: { output: { format: webp } }
            image: { resize: { width: 720 } }
          }
        )
      }
      date
      excerpt
      category {
        slug
        title
      }
    }
  }
`;

export const GET_POST_BY_SLUG = gql`
  query GetBlogPostBySlug($slug: String) {
    post(where: { slug: $slug }) {
      title
    }
  }
`;

export const GET_ALL_PORTFOLIOS = gql`
  query GetPortfolios($first: Int) {
    portfolios(first: $first, where: { public: true }, orderBy: date_DESC) {
      slug
      title
      cover {
        url(
          transformation: {
            document: { output: { format: webp } }
            image: { resize: { width: 720 } }
          }
        )
      }
    }
  }
`;

export const GET_PORTFOLIOS_BY_CATEGORY = gql`
  query GetPortfolios($category: [PortfolioCategory!] = Website, $first: Int) {
    portfolios(
      first: $first
      where: { category_contains_some: $category, public: true }
      orderBy: date_DESC
    ) {
      slug
      title
      cover {
        url(
          transformation: {
            document: { output: { format: webp } }
            image: { resize: { width: 720 } }
          }
        )
      }
    }
  }
`;

export const GET_PORFOLIO_BY_SLUG = gql`
  query GetPortfolioBySlug($slug: String) {
    portfolio(where: { slug: $slug }) {
      category
      title
      images {
        fileName
        url(transformation: { document: { output: { format: webp } } })
      }
      projectUri
      portfolioStatus
      details {
        raw
      }
      description
    }
  }
`;

export const GET_PORFOLIO_BY_ID = gql`
  query GetPortfolioById($id: ID) {
    portfolio(where: { id: $id }) {
      category
      cover {
        id
        url(
          transformation: {
            document: { output: { format: webp } }
            image: { resize: { width: 960 } }
          }
        )
      }
      title
      images {
        id
        url(transformation: { document: { output: { format: webp } } })
      }
      slug
      projectUri
      portfolioStatus
      details {
        raw
      }
      description
    }
  }
`;
export const GET_POSTS_CATEGORIES = gql`
  query GetPostsCategories {
    categories {
      title
      slug
    }
  }
`;
