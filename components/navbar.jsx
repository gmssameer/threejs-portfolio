import React, { useState } from 'react'
import { Switch, useTheme } from '@nextui-org/react'
import NextLink from 'next/link'
import { Container, Card, Row, Text } from '@nextui-org/react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import Logo from './logo'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  return (
    <NextLink href={href} passHref scroll={false}>
      <a
        className="dark:gray200 whiteAlpha.900 hover:border-b mx-5"
        target={target}
        {...props}
      >
        {children}
      </a>
    </NextLink>
  )
}

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className="fixed z-[2] w-full bg-[#ffffff40] dark:bg-[#20202380]">
      <Container className="flex flex-row  p-2 justify-between self-stretch  ">
        {/* <Image src={Logo} alt="logo" width="151" height="39" /> */}

        <div>
          <ul className="hidden md:flex md:text-sm font-normal items-center text-sm">
            <Logo />
            <LinkItem href="/">Home</LinkItem>
            <LinkItem href="/#services">Experience</LinkItem>
            <LinkItem href="/#showcase">Education</LinkItem>
            <LinkItem href="/#about">Projects</LinkItem>
          </ul>
        </div>

        <div onClick={handleNav} className="md:hidden">
          <AiOutlineMenu size={25} />
        </div>
      </Container>

      <div
        className={
          nav ? 'fixed md:hidden left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-full sm:w-[85%] md:w[30%] h-screen bg-[#F4F1F1] p-10 ease-in duration-200'
              : 'fixed left-[-200%] top-0 p-10 ease-in duration-200'
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              {/* <Image src={Logo} alt="logo" width="150" height="90" /> */}
              <div
                onClick={handleNav}
                className="rounded-full shadow shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul>
              <LinkItem href="/">
                <li className="py-4 text-sm text-black">Home</li>
              </LinkItem>
              <LinkItem href="/">
                <li className="py-4 text-sm text-black">Experience</li>
              </LinkItem>
              <LinkItem href="/">
                <li className="py-4 text-sm text-black">Education</li>
              </LinkItem>
              <LinkItem href="/">
                <li className="py-4 text-sm text-black">Projects</li>
              </LinkItem>
            </ul>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
