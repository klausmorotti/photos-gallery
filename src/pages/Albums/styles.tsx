import styled from "styled-components";

export const Container = styled.section`
    max-width:1600px;
    min-height:calc( 100vh - 200px );
    margin:0 auto;

    header {
        width:100%;
        height:100px;
        padding:0 20px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        
        .actionsMenu {
            display:flex;
            align-items:center;

            .searchAlbum {
                max-width:300px;
                width:100%;
                margin-right:20px;
                background-color:#CCC;
                border-radius:25px;
                display:flex;
                justify-content:space-between;
                align-items: center;
                padding:10px;

                input {
                    background-color:transparent;
                    flex:1;
                    outline:0;
                    margin:0 10px;
                }

                img {
                    max-width:30px;
                    cursor:pointer;
                }
            }

            .newAlbum {
                max-width:200px;
                width:100%;
                display:flex;
                align-items:center;
                padding:15px;
                background-color:#CCC;
                border-radius:10px;
                cursor:pointer;
                transition:all ease .5s;

                img {
                    max-width:30px;
                    margin-right:10px;
                }
            }
            .newAlbum:hover {
                background-color:#BBB;
                box-shadow:5px 5px 10px #DDD;
            }

        }
    }

    article {
        margin-top:50px;
        padding:0 20px;
        display:grid;
        grid-template-columns:repeat(4, 1fr);
        gap:50px;
    }
`;