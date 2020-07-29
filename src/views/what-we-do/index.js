import React, { useState } from 'react'
import { AllDarkGray, BlackSelector } from './styled'
import Logo from '../../static/images/white-logo.png'
import { Didot } from '../../components/Font/styled'
import Hero from './hero'
import execSearch from '../../static/images/whatwedo/img04.png'
import targetSearch from '../../static/images/whatwedo/img05.png'
import leadership from '../../static/images/whatwedo/img06.png'
import simulations from '../../static/images/whatwedo/img07.png'
import execSeatchThumb from '../../static/images/whatwedo/thumbnail04.jpg'
import targetSearchThumb from '../../static/images/whatwedo/thumbnail05.jpg'
import leadershipThumb from '../../static/images/whatwedo/thumbnail06.jpg'
import simulationsThumb from '../../static/images/whatwedo/thumbnail07.jpg'
import { useTranslation } from 'react-i18next';
import Thumbnail from './thumbnail'
import parse from 'html-react-parser'

const WhatWeDo = () => {
  const [activeSlide, setSlide] = useState(0);
  const { t } = useTranslation()
  const heroSlides = [
    {
      title: t('whatwedo.main.execSearch.title'),
      slug: parse(t('whatwedo.main.execSearch.slug')),
      includes: [
        parse(t('whatwedo.main.execSearch.includes.1')),
        parse(t('whatwedo.main.execSearch.includes.2')),
        parse(t('whatwedo.main.execSearch.includes.3')),
        parse(t('whatwedo.main.execSearch.includes.4')),
      ],
      image: execSearch
    },
    {
      title: t('whatwedo.main.targetedSearch.title'),
      slug: parse(t('whatwedo.main.targetedSearch.slug')),
      includes: [
        parse(t('whatwedo.main.targetedSearch.includes.1')),
        parse(t('whatwedo.main.targetedSearch.includes.2')),
        parse(t('whatwedo.main.targetedSearch.includes.3'))
      ],
      image: targetSearch
    },
    {
      title: t('whatwedo.main.leadership.title'),
      slug: parse(t('whatwedo.main.leadership.slug')),
      includes: [
        parse(t('whatwedo.main.leadership.includes.1')),
        parse(t('whatwedo.main.leadership.includes.2'))
      ],
      image: leadership
    },
    {
      title: t('whatwedo.main.groupSimulation.title'),
      slug: parse(t('whatwedo.main.groupSimulation.slug')),
      includes: [
        parse(t('whatwedo.main.groupSimulation.includes.1')),
      ],
      image: simulations
    },
  ]
  return (
    <>
      <Hero {...heroSlides[activeSlide]} />
      <BlackSelector>
        <div onClick={() => setSlide(0)} ><Thumbnail image={execSeatchThumb} title={t('whatwedo.main.execSearch.title')} isActive={activeSlide === 0} /></div>
        <div onClick={() => setSlide(1)} ><Thumbnail image={targetSearchThumb} title={t('whatwedo.main.targetedSearch.title')} isActive={activeSlide === 1} /></div>
        <div onClick={() => setSlide(2)} ><Thumbnail image={leadershipThumb} title={t('whatwedo.main.leadership.title')} isActive={activeSlide === 2} /></div>
        <div onClick={() => setSlide(3)} ><Thumbnail image={simulationsThumb} title={t('whatwedo.main.groupSimulation.title')} isActive={activeSlide === 3} /></div>
      </BlackSelector>
      <AllDarkGray>
        <div>
          {parse(t('whatwedo.secondaryBanner'))}
          <Didot className="tilde"></Didot>
          <img src={Logo} width="120px" height="31px" alt="logo" />
        </div>
      </AllDarkGray>
    </>
  )
}

export default WhatWeDo;