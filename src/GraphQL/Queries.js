import { gql } from "@apollo/client";

export const GET_BLOG_POSTS = gql`
    query GetBlogPosts($first: Int) {
        posts(first: $first) {
        slug
        title
        coverImage {
            url(transformation: {document: {output: {format: webp}}})
        }
        publishedAt
        excerpt
        category {
            slug
            title
          }
        }
    }
`;

export const GET_ALL_PORTFOLIOS = gql`
    query GetPortfolios($first: Int) {
        portfolios(first: $first) {
        slug
        title
        cover {
            url(transformation: {document: {output: {format: webp}}})
        }
        }
    }  
`;

export const GET_PORTFOLIOS_BY_CATEGORY = gql`
    query GetPortfolios($category: PortfolioCategory, $first: Int) {
        portfolios(first: $first, where: {category: $category}) {
        slug
        title
        cover {
            url(transformation: {document: {output: {format: webp}}})
        }
        }
    }  
`;

export const GET_PORFOLIO_BY_SLUG = gql`
query GetPortfolioBySlug($slug: String) {
    portfolio(where: {slug: $slug}) {
      category
      title
      images {
        id
        url(transformation: {document: {output: {format: webp}}})
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