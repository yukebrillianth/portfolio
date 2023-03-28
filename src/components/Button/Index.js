import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Styled = styled.a`
    ${tw`
            padding[8px 16px]
            md:padding[12px 24px]
            hover:opacity-70
            bg-primary
            border-radius[100px]
            text-white
            font-bold
            text-lg
        `
    }
`

export default function Button(props) {
    return (
        <Styled
            prefetch
            href={props.href}
        >Buttond</Styled>
    )
}
