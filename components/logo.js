import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Image from 'next/image'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  }
`

const Logo = () => {
  const logoLight = '/logo1.png'
  const logoDark = '/logo2.png'
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image
            src={useColorModeValue(logoLight, logoDark)}
            width={50}
            height={50}
            alt="logo"
          />
          <Text
            ml={-2}
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
          >
            Aver-Roes
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
