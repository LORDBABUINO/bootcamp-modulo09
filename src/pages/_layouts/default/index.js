import React from 'react'
import { element } from 'prop-types'
import { Wrapper } from './styles'

const DefaultLayout = ({ children }) => <Wrapper>{children}</Wrapper>

DefaultLayout.propTypes = {
  children: element.isRequired,
}

export default DefaultLayout
