import { useQuery } from "@apollo/client";
import Link from "next/link";
import { useEffect, useState } from "react";
import tw, { styled } from "twin.macro"
import { GET_BLOG_POSTS } from "../../GraphQL/Queries";
import PostCard from "./Elements/PostCard";

const Wrapper = styled.section(() => [
    tw`
        relative
        flex
        flex-col
        items-center
        padding[64px 28px]
        md:padding[128px 170px]
        text-dark
    `
]);

const Title = styled.h2(() => [
    tw`
        font-semibold
        font-size[3.375rem]
        line-height[3.687rem]
        mt-0
        mb-[92px]
    `
]);

const LoadMoreBtn = styled.a(() => [
    tw`
        flex
        justify-center
        items-center
        padding[8px 16px]
        md:padding[12px 24px]
        bg-primary
        border-radius[100px]
        hover:opacity-70
        text-white
        font-semibold
        font-size[14px]
        margin-right[4px]
    `,
    `box-shadow: 0px 4px 20px rgba(255, 152, 0, 0.3);`
]);

export default function LatestPosts() {
    const [posts, setPosts] = useState([]);

    const { data } = useQuery(GET_BLOG_POSTS, {
        variables: { first: 3 }
    })

    function formatDate(date) {
        return date.getDate() + ' ' + date.toLocaleString('en-us', { month: "short" }) + ' ' + date.getFullYear();
    }

    useEffect(() => {
        if (data) {
            setPosts(data.posts)
        }
    }, [data])


    return (
        <Wrapper>
            <Title>Latest Posts.</Title>
            {posts.map((post) => (
                <PostCard
                    postTitle={post.title}
                    postDate={
                        formatDate(new Date(post.date))
                    }
                    postExcerpt={post.excerpt}
                    postSlug={"blog/" + post.slug}
                    postCategory={post.category.title}
                    postCategorySlug={"category/" + post.category.slug}
                    postCover={post.coverImage.url}
                />
            ))}
            <Link prefetch href="/blog" passHref>
                <LoadMoreBtn>Show More</LoadMoreBtn>
            </Link>
        </Wrapper>
    )
}
