import styled from "styled-components";

export const Container = styled.section`
    max-width:1600px;
    min-height:calc( 100vh - 200px );
    margin:0 auto;
    
    .photoArea {
        margin-top:50px;
        max-width:600px;
        padding:20px;
        background-color:#DDD;
        border-radius:10px;
        transition:all ease .5s;
        display:flex;
        justify-content:center;
        
        &&:hover {
            box-shadow:5px 5px 10px #DDD;
            transform:scale(1.01, 1.01);
        }
    }
`;