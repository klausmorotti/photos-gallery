import styled from "styled-components";

export const Container = styled.div`
    padding:20px;
    background-color:#DDD;
    border-radius:10px;
    cursor:pointer;
    transition:all ease .5s;
    
    &&:hover {
        box-shadow:5px 5px 10px #DDD;
        transform:scale(1.01, 1.01);
    }

    .imageArea {
        display:flex;
        justify-content:center;

        img {
            max-width:150px;
        }
    }
    
    a {
        text-decoration:none;
        color:#000;
    }
    p {
        text-align:center;
        margin-top:15px;
    }
`;