import styled from "styled-components";

export const Container = styled.div`
    margin-top: 5rem;

    @media (max-width: 640px) {
        width: 31rem;
        margin: 0 auto;
    }
`;

export const List = styled.ul`
    max-width: 60rem;
    margin: 0 auto;
    animation: Up 0.8s;
    position: relative;

    ::before {
        content: '';
        position: absolute;
        left: 50%;
        width: 2px;
        height: 100%;
        background-color: #474747;
    }

    @media (max-width: 640px) {
        ::before {
            left: -.7rem;
        }
    }
`;

export const ListItem = styled.li`
    width: 30rem;
    padding: 1rem 2rem;
    position: relative;
    margin: 3rem 0;
    margin-bottom: 4rem;

    &.left {
        left: 50%;
    }

    &.right {
        right: 0rem;
    }

    &.left::after {
        content: '';
        position: absolute;
        top: 3rem;
        left: -.3rem;
        width: .8rem;
        height: .8rem;
        background-color: #2ef8a0;
        box-shadow: .1rem 0rem 1rem .1rem #2ef8a0;
        border-radius: 100%;
    }

    &.right::after {
        content: '';
        position: absolute;
        top: 3rem;
        right: -.5rem;
        width: .8rem;
        height: .8rem;
        background-color: #2ef8a0;
        box-shadow: .1rem 0rem 1rem .1rem #2ef8a0;
        border-radius: 100%;
    }

    @media (max-width: 640px) {
        margin-right: 0;
        left: 0;

        &.left {
            left: 0;
        }

        &.left::after {
            left: -1rem;
        }

        ::after {
            left: -1rem;
        }
    }
`;