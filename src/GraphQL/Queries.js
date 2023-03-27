import { gql } from "@apollo/client";

export const GET_LATEST_BLOG_POSTS = gql`
    query GetLatestBlogPosts {
        posts(first: 3) {
        slug
        title
        coverImage {
            url(transformation: {document: {output: {format: webp}}})
        }
        publishedAt
        excerpt
        }
    }
`;