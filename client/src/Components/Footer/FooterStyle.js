import styled from 'styled-components'


export const Section = styled.section`
    padding-top: 20px;
`
export const HeadingOne = styled.h1`
    font-size: 32px;
    font-family: 'sora';
`
export const Paragraph = styled.p`
    font-size: 14px;
    font-family: 'sora';
`
export const Input = styled.input`
    width: 25%;
    padding: 20px 24px;
    border-radius: 30px;
    color: #727272;
    border: none;
    
    &:focus{
        outline: none;
    }
`

export const Button = styled.button`
    font-size: 16px; 
    border-radius: 30px;
    padding: 10px 20px;
    background-color: #222;
    color: #fff;
`

export const FooterSection = styled.footer`
    width: 100%;
    height: auto;
    background: #222;
    padding-top: 50px;
`

export const Wrapper = styled.div`
    position: relative;
    width: 85%;
    margin: auto;

    @media (max-width: 768px) {
        width: 92%;
    }
` 

export const FooterItem = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr 2fr;
    grid-gap: 20px;
    
    @media (max-width: 768px) {
        grid-template-columns: repeat(1,1fr);
    }
`

export const FooterColumn = styled.div`
    width: 100%;
    box-sizing: border-box;
`

export const FooterForm = styled.div`
    width: 100%;

    
`
export const FooterButton = styled.div`
    position: absolute;
    float: right;
    top: 45px;
    left: 1043px;

    @media (max-width: 768px) {
        top: 374px;
        left: 196px;
    }
`    
export const FooterBox = styled.div`
    width: 100%;
    height: auto;
    background: #18191a;
    display: flex;
    align-items: center;
    padding: 10px 0;
`

export const FooterBoxItem = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr 2fr;
    grid-gap: 5px;
    
    
    @media (max-width: 768px) {
        grid-template-columns: repeat(1,1fr);
    }
`
export const FooterBoxColumn= styled.div`
    width: 100%;
    box-sizing: border-box;
`

export const FooterSocials = styled.div`
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
`
export const FooterRights = styled.div`
    margin-top: 12px;
    @media (max-width: 768px) {
        display: none;
    }
`
export const FooterDungada = styled.div`
    float: right;
    margin-top: 12px;
    @media (max-width: 768px) {
        display: none;
    }
`

export const LinkWrapper = styled.span`
    a{
        text-decoration: none;
        color: inherit;
    }
`

export const FooterMobile = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: block;
        padding-top: 20px;
        color: #fff;
    }
`
