import React, { useState } from 'react'
import { GothamLight, GothamBold, Didot } from '../../components/Font/styled'
import { useTranslation } from 'react-i18next';
import { 
  MainContainer,
  HorizontalDivider,
  Blackbox,
  FormContainer,
  ContactItem,
  Icon,
  SendButton,
  PrivacyButton
} from './styled'
import { Box, Checkbox, TextField } from 'gestalt'
import parse from 'html-react-parser'

const Contact = () => {
  const { t } = useTranslation()
  const [tcIsChecked, setChecked] = useState(false);

    
  return (
    <MainContainer>
      <Blackbox>
        <HorizontalDivider width={4} size={40} />
        <h2>{t('contact.heading')}</h2>
        <ContactItem>
          <Icon>
            <svg 
              version="1.1" 
              id="Layer_1" 
              xmlns="http://www.w3.org/2000/svg" 
              x="0px" 
              y="0px"
              viewBox="0 0 25 32" 
              style={{ 
                enableBackground: 'new 0 0 25 32',
                width: 25,
                height: 32
              }}
              xmlSpace="preserve"
            >
            <g fill="#ffffff">
              <path d="M12.5,0.2c-6.6,0-12,5.4-12,12c0,4.3,1.3,6,7.6,14.3c1.1,1.4,2.3,3.1,3.7,4.9c0.2,0.2,0.4,0.4,0.7,0.4
                c0.3,0,0.6-0.1,0.7-0.4c1.4-1.9,2.6-3.5,3.7-4.9c6.3-8.3,7.6-10,7.6-14.3C24.5,5.6,19.1,0.2,12.5,0.2L12.5,0.2z M15.5,25.4
                c-0.9,1.2-1.9,2.5-3,3.9c-1.1-1.5-2.1-2.8-3-4c-6.1-8-7.2-9.5-7.2-13.1c0-5.6,4.6-10.2,10.2-10.2c5.6,0,10.2,4.6,10.2,10.2
                C22.7,15.9,21.6,17.3,15.5,25.4L15.5,25.4z M15.5,25.4"/>
              <path d="M12.5,5.8C8.9,5.8,6,8.7,6,12.2s2.9,6.5,6.5,6.5s6.5-2.9,6.5-6.5S16.1,5.8,12.5,5.8L12.5,5.8z M12.5,16.9
                c-2.6,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6s4.6,2.1,4.6,4.6S15.1,16.9,12.5,16.9L12.5,16.9z M12.5,16.9"/>
            </g>
            </svg>
          </Icon>
          <p>
            <GothamLight><strong>{parse(t('contact.address'))}</strong><br />
            Guillermo Gonzalez Camarena 600 <br/>
            4A-63 Santa Fe 01210 CDMX, Mexico
            </GothamLight>
          </p>
        </ContactItem>
        <ContactItem>
          <Icon>
            <svg 
              version="1.1" 
              id="Layer_1" 
              xmlns="http://www.w3.org/2000/svg" 
              x="0px" 
              y="0px"
              viewBox="0 0 31 32" 
              style={{ 
                enableBackground: 'new 0 0 31 32',
                width: 31,
                height: 32
              }}
              xmlSpace="preserve"
            >
            <g fill="#ffffff">
              <path d="M26.6,4.5c-2.6-2.6-6.1-4.1-9.8-4.1c-0.6,0-1.1,0.5-1.1,1.1c0,0.6,0.5,1.1,1.1,1.1c3.1,0,6.1,1.2,8.3,3.4
    c2.2,2.2,3.4,5.2,3.4,8.3c0,0.6,0.5,1.1,1.1,1.1c0.6,0,1.1-0.5,1.1-1.1C30.6,10.6,29.2,7.1,26.6,4.5z"/>
              <path d="M22,14.4c0,0.6,0.5,1.1,1.1,1.1c0.6,0,1.1-0.5,1.1-1.1c0-4.1-3.4-7.5-7.5-7.5c-0.6,0-1.1,0.5-1.1,1.1
    c0,0.6,0.5,1.1,1.1,1.1C19.6,9.1,22,11.4,22,14.4z"/>
              <path d="M19.6,20c-1.7-0.1-2.5,1.2-2.9,1.8c-0.3,0.5-0.2,1.2,0.3,1.5c0.5,0.3,1.2,0.2,1.5-0.3c0.5-0.7,0.7-0.8,1-0.8
    c1,0.1,4.7,2.9,5.1,3.7c0.1,0.3,0.1,0.5,0,0.8c-0.4,1.2-1,2-1.9,2.4c-0.8,0.4-1.8,0.3-2.8-0.1c-3.9-1.6-7.4-3.8-10.2-6.7
    c0,0,0,0,0,0c-2.8-2.8-5-6.3-6.6-10.2c-0.4-1.1-0.5-2-0.1-2.8C3.2,8.5,4,7.8,5.2,7.4c0.3-0.1,0.6-0.1,0.8,0
    c0.9,0.4,3.6,4.1,3.7,5.1c0,0.3-0.1,0.5-0.8,1c-0.5,0.3-0.6,1-0.3,1.5c0.3,0.5,1,0.6,1.5,0.3c0.6-0.4,1.9-1.3,1.8-3
    c-0.1-1.8-3.5-6.4-5.2-7c-0.7-0.3-1.5-0.3-2.3,0C2.7,5.9,1.5,7,0.8,8.4c-0.6,1.4-0.6,3,0.1,4.6C2.6,17.2,5,20.9,8,23.9c0,0,0,0,0,0
    c3.1,3,6.7,5.4,10.9,7.1c0.8,0.3,1.7,0.5,2.5,0.5c0.7,0,1.5-0.2,2.1-0.5c1.4-0.6,2.5-1.9,3.1-3.7c0.3-0.8,0.3-1.5,0-2.3
    C26,23.5,21.3,20.1,19.6,20z"/>
            </g>
            </svg>
          </Icon>
          <p>
            <GothamLight>
              <strong>{t('contact.phone1')}</strong> 55 5081 8432 / 55 4390 8004<br />
              <strong>{t('contact.phone2')}</strong> (954) 399 6089<br />
            </GothamLight>
          </p>
        </ContactItem>
        <ContactItem>
          <Icon>
            <svg 
              version="1.1" 
              id="Layer_1" 
              xmlns="http://www.w3.org/2000/svg" 
              x="0px" 
              y="0px"
              viewBox="0 0 32.9 40" 
              style={{ 
                enableBackground: 'new 0 0 32.9 40',
                width: 31,
                height: 32
              }}
              xmlSpace="preserve"
            >
              <g fill="#ffffff">
                <g>
                  <path d="M29.4,0.6h-26c-1.6,0-3,1.3-3,3v32.8c0,1.6,1.3,3,3,3h26c1.6,0,3-1.3,3-3V3.6C32.4,2,31.1,0.6,29.4,0.6
                    L29.4,0.6z M30.4,36.4c0,0.5-0.4,1-1,1h-26c-0.5,0-1-0.4-1-1V3.6c0-0.5,0.4-1,1-1h26c0.5,0,1,0.4,1,1V36.4z"/>
                </g>
                <path d="M5.3,13L5.3,13c0,0.6,0.5,1,1,1h20.2c0.6,0,1-0.5,1-1l0,0c0-0.6-0.5-1-1-1H6.4C5.8,12,5.3,12.4,5.3,13z"/>
                <path d="M8.1,7.3L8.1,7.3c0,0.6,0.5,1,1,1h14.5c0.6,0,1-0.5,1-1l0,0c0-0.6-0.5-1-1-1H9.2C8.6,6.3,8.1,6.8,8.1,7.3z"/>
                <path d="M5.3,18.7L5.3,18.7c0,0.6,0.5,1,1,1h20.2c0.6,0,1-0.5,1-1l0,0c0-0.6-0.5-1-1-1H6.4C5.8,17.6,5.3,18.1,5.3,18.7
                  z"/>
                <path d="M5.3,24.3L5.3,24.3c0,0.6,0.5,1,1,1h20.2c0.6,0,1-0.5,1-1l0,0c0-0.6-0.5-1-1-1H6.4C5.8,23.3,5.3,23.8,5.3,24.3
                  z"/>
                <path d="M5.3,30L5.3,30c0,0.6,0.5,1,1,1h14.5c0.6,0,1-0.5,1-1l0,0c0-0.6-0.5-1-1-1H6.4C5.8,29,5.3,29.4,5.3,30z"/>
              </g>
            </svg>
          </Icon>
          <p>
            <GothamLight>
              <strong>{t('contact.form')}</strong>
            </GothamLight>
          </p>
        </ContactItem>
        <ContactItem>
          <Icon>
            <svg 
              version="1.1" 
              id="Layer_1" 
              xmlns="http://www.w3.org/2000/svg" 
              x="0px" 
              y="0px"
              viewBox="0 0 32.9 23.1" 
              style={{ 
                enableBackground: 'new 0 0 32.9 23.1',
                width: 31,
                height: 32
              }}
              xmlSpace="preserve"
            >
            <g fill="#ffffff">
              <path d="M26.8,4.9L16.4,14L6.1,4.9C5.7,4.5,5,4.6,4.7,5C4.3,5.4,4.4,6,4.8,6.4l11,9.7c0.2,0.2,0.4,0.2,0.7,0.2
    c0.2,0,0.5-0.1,0.7-0.2l11-9.7c0.4-0.4,0.5-1,0.1-1.4C27.8,4.6,27.2,4.5,26.8,4.9L26.8,4.9z M26.8,4.9"/>
              <path d="M29.4,0.7h-26c-1.6,0-3,1.3-3,3v15.8c0,1.6,1.3,3,3,3h26c1.6,0,3-1.3,3-3V3.7C32.4,2,31.1,0.7,29.4,0.7
    L29.4,0.7z M30.4,19.5c0,0.5-0.4,1-1,1h-26c-0.5,0-1-0.4-1-1V3.7c0-0.5,0.4-1,1-1h26c0.5,0,1,0.4,1,1V19.5z M30.4,19.5"/>
            </g>
            </svg>
          </Icon>
          <p>
            <GothamLight>
              <strong>{t('contact.email')}</strong><br />
              clientservices@evanston-wicker.com
            </GothamLight>
          </p>
        </ContactItem>
      </Blackbox>
      <FormContainer>
        <Box alignItems="center" justifyContent="center" display="flex" direction="column" >
          <span style={{ textAlign: "center" }}>{t('contact.readOur')}</span> <br />
          <PrivacyButton>
            {t('contact.privacyButton')}
          </PrivacyButton>
        </Box>
        <div className="formRow">
          <TextField
            id="firstName"
            onChange={() => {}}
            label={t('contact.fName')}
            value={null}
            type="text"
          />
        </div>
        <div className="formRow">
          <TextField
            id="lastName"
            onChange={() => {}}
            label={t('contact.lName')}
            value={null}
            type="text"
          />
        </div>
        <div className="formRow split">
          <TextField
            id="company"
            onChange={() => {}}
            label={t('contact.company')}
            value={null}
            type="text"
          />
          <TextField
            id="jobTitle"
            onChange={() => {}}
            label={t('contact.job')}
            value={null}
            type="text"
          />
        </div>
        <div className="formRow split">
          <TextField
            id="email"
            onChange={() => {}}
            label={t('contact.emailAddress')}
            value={null}
            type="email"
          />
          <TextField
            id="phone"
            onChange={() => {}}
            label={t('contact.phone')}
            value={null}
            type="text"
          />
        </div>
        <div className="formRow split">
          <TextField
            id="country"
            onChange={() => {}}
            label={t('contact.country')}
            value={null}
            type="text"
          />
          <TextField
            id="city"
            onChange={() => {}}
            label={t('contact.city')}
            value={null}
            type="text"
          />
        </div>
        <div className="button">
          <div>
            <Checkbox
              checked={tcIsChecked}
              id="termsAndConditions"
              name="tc"
              onChange={({ checked }) => {
                setChecked(checked);
              }}
              label={
                <span>{t('contact.haveRead')}</span>
              }
            />
          </div>
          <SendButton>{t('contact.sendButton')}</SendButton>
          <span>{t('contact.disclaimer')}</span>
        </div>
      </FormContainer>
    </MainContainer>
  )
}

export default Contact;