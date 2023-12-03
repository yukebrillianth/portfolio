import React from 'react'
import Image from "next/image";
import Link from "next/link";
import tw, { styled } from 'twin.macro';
import propTypes from 'prop-types';

const LatestPostsCard = styled.article(() => [
    tw`
        flex
        flex-col
        lg:flex-row
        max-w-sm
        md:max-w-4xl
        mb-12
    `
]);

const PostCardImgContainer = styled.div(() => [
    tw`
        relative
        min-width[360px]
        min-height[203px]
    `
]);

const PostCardCategory = styled.span(() => [
    tw`
        absolute
        right-0
        z-50
        bg-[#FF9800]
        text-white
        font-bold
        text-xs
        border-top-right-radius[8px]
        px-[20px]
        py-[2px]
    `
]);

const PostCardDetailsContainer = styled.div(() => [
    tw`
        lg:ml-[40px]
    `
]);

const PostCardTitle = styled.h2(() => [
    tw`
        text-2xl
        cursor-pointer
        font-semibold
    `
]);

const PostCardDate = styled.span(() => [
    tw`
        color[#575958]
        font-size[14px]
        font-semibold
        mt-2.5
    `
]);

const PostCardExcerpt = styled.p(() => [
    tw`
        color[#575958]
        text-base
        font-weight[500]
        line-height[24px]
        mt-5
    `
]);

const PostCardCTA = styled.span(() => [
    tw`
        font-semibold
        text-sm
        mt-2.5
    `
]);

function PostCard(props) {
    return (
        <LatestPostsCard>
            <PostCardImgContainer>
                <Link prefetch href={props.postCategorySlug} passHref>
                    <PostCardCategory>{props.postCategory}</PostCardCategory>
                </Link>
                <Image className="rounded-lg" width={360} height={203} src={props.postCover} objectFit="cover" placeholder="blur" blurDataURL="/assets/placeholder.jpg" alt={props.postTitle} />
            </PostCardImgContainer>
            <PostCardDetailsContainer>
                <Link prefetch href={props.postSlug} passHref>
                    <PostCardTitle>{props.postTitle}</PostCardTitle>
                </Link>
                <PostCardDate>{props.postDate}</PostCardDate>
                <PostCardExcerpt>
                    {props.postExcerpt}
                </PostCardExcerpt>
                <Link href={props.postSlug} passHref>
                    <PostCardCTA>READ MORE</PostCardCTA>
                </Link>
            </PostCardDetailsContainer>
        </LatestPostsCard>
    )
}

export default PostCard

PostCard.propTypes = {
    postTitle: propTypes.string.isRequired,
    postSlug: propTypes.string.isRequired,
    postCategory: propTypes.string.isRequired,
    postCategorySlug: propTypes.string.isRequired,
    postDate: propTypes.any.isRequired,
    postCover: propTypes.string.isRequired,
    postExcerpt: propTypes.string.isRequired
}