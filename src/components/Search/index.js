import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

const Wrapper = styled.form`
    ${tw`
            flex
            w-full
            lg:w-auto
            justify-center
            gap-4
            md:gap-7
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
        `
    }
    box-shadow: 0px 4px 20px rgba(255, 152, 0, 0.3);
`;

export default function Search(props) {
    if (props.type === "portfolio") {
        return (
            <Wrapper action='/portfolio/search'>
                <Input name='q' type="text" required="true" placeholder={props.placeholder} />
                <Button type='submit'>Search</Button>
            </Wrapper>
        )
    }
    return (
        <Wrapper>
            <Input type="text" required="true" placeholder={props.placeholder} />
            <Button>Search</Button>
        </Wrapper>
    )
}

Search.propTypes = {
    placeholder: propTypes.string.isRequired,
    type: propTypes.oneOf(['portfolio', 'blog'])
}