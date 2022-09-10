import React, { useState, useEffect } from 'react'
import { Section, FooterSection, Wrapper, FooterItem, FooterColumn, FooterForm, FooterButton, FooterBox, FooterBoxItem, FooterBoxColumn, FooterSocials, FooterRights, FooterDungada, LinkWrapper, FooterMobile, HeadingOne, Paragraph, Button, Input} from './FooterStyle'
import { Link } from 'react-router-dom'
import {AiOutlineGithub} from "react-icons/ai";
import {AiFillLinkedin} from 'react-icons/ai';
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiOutlineInstagram} from 'react-icons/ai';
import { axiosInstance } from '../../utils'



function Footer() {

  const [cats, setCats] = useState([])

  useEffect(()=>{
    const getCat = async () => {
      const res = await axiosInstance.get('/categories/')
      setCats(res.data.data)
    }
    getCat()
  }, [setCats])

  return (
    <Section>
      <FooterSection>
        <Wrapper>
          <FooterItem style={{color: "#edeffb"}}>
           <FooterColumn>
            <HeadingOne>SEUN-DAVID</HeadingOne>
            <Paragraph>Get the best out of writing abilities with our blog.</Paragraph>
           </FooterColumn>
           <FooterColumn>
            <HeadingOne>CATEGORIES</HeadingOne>
            <Paragraph>
              <LinkWrapper>
                {cats.map((c) => (
                  <Link to={`/?cat=${c.name}`} className='link'>
                    <li className='sidebarListItem'>{c.name}</li>
                  </Link>
                ))}
              </LinkWrapper>
            </Paragraph>
           </FooterColumn>
           <FooterColumn>
            <Paragraph>Stay in the loop with us</Paragraph>
            <FooterForm >
              <Input placeholder="Enter Email Address" style={{width: '100%', boxSizing:'border-box', position: 'relative'}} />
              <FooterButton>
                <Button>Submit</Button>
              </FooterButton>
            </FooterForm>
           </FooterColumn>
          </FooterItem>
        </Wrapper>
        <br />
        <FooterMobile>
          <Wrapper>
            <Paragraph>&copy; 2022 SeunBlog.All right reserved.</Paragraph>
            <Paragraph>Powered by Seun-David.</Paragraph>
          </Wrapper>
        </FooterMobile>
        <br />
      </FooterSection> 
      <FooterBox>
          <Wrapper>
            <FooterBoxItem style={{color: "#edeffb"}}>
              <FooterBoxColumn>
                <FooterRights>
                  <Paragraph>&copy; 2022 Seun-Blog All right reserved.</Paragraph>
                </FooterRights>
              </FooterBoxColumn>
              <FooterBoxColumn style={{display: 'inline-flex', justifyContent: 'center'}}>
                <FooterSocials style={{marginRight: '10px'}}><LinkWrapper><Link to='#'><AiOutlineGithub className='me-2' size={30}/></Link></LinkWrapper></FooterSocials>
                <FooterSocials style={{marginRight: '10px'}}><LinkWrapper><Link to='#'><AiFillLinkedin className='me-2' size={30}/></Link></LinkWrapper></FooterSocials>
                <FooterSocials style={{marginRight: '10px'}}><LinkWrapper><Link to='#'><AiOutlineInstagram className='me-2' size={30}/></Link></LinkWrapper></FooterSocials>
                <FooterSocials><LinkWrapper><Link to='#'><AiOutlineTwitter size={30}/></Link></LinkWrapper></FooterSocials>
              </FooterBoxColumn>
              <FooterBoxColumn>
                <FooterDungada>
                  <Paragraph>Powered by Seun-David.</Paragraph>
                </FooterDungada>
              </FooterBoxColumn>
            </FooterBoxItem>
          </Wrapper>
        </FooterBox>  
    </Section>
  )
}


export default Footer;