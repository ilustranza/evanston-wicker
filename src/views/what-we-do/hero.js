import React from 'react'
import { AllPurple, BlackBox, Right, Flex, IncludeItem, IncludeItemsContainer, HorizontalDivider, MainContainer } from './styled'
import { GothamLight, GothamBold } from '../../components/Font/styled'
import { useTranslation } from 'react-i18next';

const Hero = ({ title, image, slug, includes }) => {
  const { t } = useTranslation()
  
  return (
    <AllPurple>
      <Flex alignItems="center">
        <HorizontalDivider borderWidth={4} marginRight={65} />
        <h2><GothamBold>{title}</GothamBold></h2>
      </Flex>
      <MainContainer>
        <BlackBox>
          <Flex justifyContent="space-between">
            <Right maxWidth="450px">
              <HorizontalDivider size="50px" borderWidth={4} marginBottom={60} />
              <p><GothamLight size={20}>{slug}</GothamLight></p>
            </Right>
            <div>
              <img src={image} alt="related to section" />
            </div>
          </Flex>
          <div style={{ width: '100%', textAlign: 'left', textTransform: 'uppercase', marginTop: 35 }}>
            <GothamLight size={23} color="white">{t('whatwedo.main.includesSection')}:</GothamLight>
          </div>
          <IncludeItemsContainer>
            {includes.map((item, idx) => (
              <React.Fragment key={idx}>
                <IncludeItem>
                  <GothamBold>{item}</GothamBold>
                </IncludeItem>
                {idx < includes.length -1 && <HorizontalDivider color="#8a49b2" borderWidth={4} size="34px" marginLeft={30} marginRight={30} />}
              </React.Fragment>
            ))}
          </IncludeItemsContainer>
        </BlackBox>
      </MainContainer>
    </AllPurple>
  )
}

export default Hero