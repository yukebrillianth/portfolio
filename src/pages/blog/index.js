import React, { useEffect, useState } from 'react'
import { useQuery } from "@apollo/client";
import tw from 'twin.macro';
import { Footer, Navbar, Search } from '../../components';
import { GET_BLOG_POSTS } from '../../GraphQL/Queries';
import PostCard from '../../components/LatestPosts/Elements/PostCard';
import Link from 'next/link';
import styled from 'styled-components';

const styles = {
    darkSection: (sticky) => [
        tw`
        bg-dark
        background-size[400%]
        md:background-size[300%]
        lg:background-size[200%]
        xl:background-size[cover]
      `,
        `
        background-image: url(/assets/backgrounds/grid-dark.svg);
        background-position: 100%;
      `,
        sticky ? tw`relative` : "",
    ],
    lightSection: (sticky) => [
        tw`
        bg-white
        background-size[400%]
        md:background-size[300%]
        lg:background-size[200%]
        xl:background-size[cover]
      `,
        `
        background-image: url(/assets/backgrounds/grid-light.svg);
        background-position: 100%;
        // background-size: cover;
      `,
        sticky ? tw`relative` : "",
    ],
};

const Wrapper = tw.div`
    flex
    flex-col
    items-center
    justify-between
    xl:justify-center
    padding[64px 28px]
    xl:padding[128px]
    w-full
    `;

const Title = tw.h1`
    text-white
    text-center
    font-semibold
    font-size[3.375rem]
    2xl:font-size[4.625rem]
    line-height[3.687rem]
    mt-0
`;

const Description = tw.p`
    font-size[18px]
    text-[#B8B8B8]
    font-normal
    text-center
    mt-[20px]
    mb-[52px]
    max-w-[41rem]
`;

const LoadMoreBtn = styled.span(() => [
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

const ShadowEffect = styled.span(() => [
    tw`
        // hidden
        absolute
        md:w-[300px]
        md:h-[300px]
        w-[150px]
        h-[150px]
        z-0
        left-[12%]
        top-[15%]
        opacity-30
        rounded-[150px]
    `,
    `
        background: conic-gradient(
        from 180deg at 50% 50%,
        #b524f9 0deg,
        #ff9800 0.04deg,
        #bb34fa 360deg
        );
        filter: blur(100px);
    `
]);

export default function Blog() {
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
        <>
            <Navbar />
            <section css={styles.darkSection}>
                <Wrapper>
                    <Title>Yuke's Personal Blog.</Title>
                    <Description>Sharing all my information, stories and personal experiences. I hope, readers can enjoy my writing in Indonesian.</Description>
                    <Search type="blog" placeholder="Search blog post...." action="/blog/search" />
                    <ShadowEffect />
                </Wrapper>
            </section>
            <section css={styles.lightSection}>
                <Wrapper>
                    {posts.map((post) => (
                        <PostCard
                            key={post.slug}
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
            </section>
            <Footer />
        </>
    )
}