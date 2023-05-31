"use client"

import styled from "styled-components";

const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 6rem;
    min-height: 100vh;
    background-color: var(--bg-primary);
`

export interface PageWrapperProps {
    children: React.ReactNode;
}

export function PageWrapper ({ children }: PageWrapperProps) {
    return (
        <>
            <Main>
                {children}
            </Main>
        </>
    )


}