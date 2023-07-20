import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';
import { useQuery } from '@apollo/client';
import { GET_POSTS_CATEGORIES } from '../../GraphQL/Queries';

const Wrapper = styled.form`
    ${tw`
            flex
            md:flex-row
            flex-col
            w-full
            lg:w-auto
            justify-center
            gap-4
            md:gap-2
            lg:justify-start
        `
    }
`;

const Input = styled.input`
    ${tw`
            bg-white
            text-gray-900
            font-semibold
            text-base
            py-3.5
            px-[26px]
            rounded-full
            w-full
            md:w-[284px]
        `
    }
`;

const Button = styled.button`
    ${tw`
            bg-primary
            px-6
            py-3
            rounded-full
            font-medium
            text-lg
            hover:opacity-70
             text-white
        `
    }
    box-shadow: 0px 4px 20px rgba(255, 152, 0, 0.3);
`;

const Category = tw.select`
    appearance-none
    bg-white
    text-gray-900
    font-semibold
    text-base
    py-3.5
    pl-[26px]
    pr-[40px]
    w-full
    rounded-full
    truncate
`;

export default function Search(props) {
    if (props.type === "portfolio") {
        return (
            <Wrapper action='/portfolio/search'>
                <Input name='q' type="text" required={true} placeholder={props.placeholder} />
                <Button type='submit'>Search</Button>
            </Wrapper>
        )
    } else if (props.type === "blog") {
        const [categories, setCategories] = useState([]);

        const { data } = useQuery(GET_POSTS_CATEGORIES)

        useEffect(() => {
            if (data) {
                setCategories(data.categories)
            }
        }, [data])
        return (
            <Wrapper action={props.action}>
                <div tw='relative inline-block lg:max-w-[160px]'>
                    <Category name='category'>
                        <option defaultValue value="all">All Category</option>
                        {categories.map((category) => (
                            <option key={category.slug} value={category.slug}>{category.title}</option>
                        ))}
                    </Category>
                    <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5 7l5 5 5-5z" /></svg>
                    </div>
                </div>
                {/* <InputWrapper> */}
                <Input name='q' type="text" required={false} placeholder={props.placeholder} />
                <Button type='submit'>Search</Button>
                {/* </InputWrapper> */}
            </Wrapper>
        )
    }
    return (
        <Wrapper>
            <Input type="text" required={true} placeholder={props.placeholder} />
            <Button>Search</Button>
        </Wrapper>
    )
}

Search.propTypes = {
    placeholder: propTypes.string.isRequired,
    type: propTypes.oneOf(['portfolio', 'blog']),
    action: propTypes.string.isRequired
}