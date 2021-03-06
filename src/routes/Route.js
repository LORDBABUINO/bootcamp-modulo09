import React from 'react'
import { bool, oneOfType, element, func } from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

import AuthLayout from '~/pages/_layouts/auth'
import DefaultLayout from '~/pages/_layouts/default'

const RouteWrapper = ({ component: Component, isPrivate, ...rest }) => {
  const signed = false

  if (!signed && isPrivate) return <Redirect to="/" />
  if (signed && !isPrivate) return <Redirect to="/dashboard" />

  const Layout = signed ? DefaultLayout : AuthLayout

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  )
}

RouteWrapper.propTypes = {
  isPrivate: bool,
  component: oneOfType([element, func]).isRequired,
}
RouteWrapper.defaultProps = {
  isPrivate: false,
}

export default RouteWrapper
