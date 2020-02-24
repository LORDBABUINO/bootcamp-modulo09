import React from 'react'
import { bool, oneOfType, element, func } from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

const RouteWrapper = ({ component: Component, isPrivate, ...rest }) => {
  const signed = false
  if (!signed && isPrivate) return <Redirect to="/" />
  if (signed && !isPrivate) return <Redirect to="/dashboard" />
  return <Route {...rest} component={Component} />
}

RouteWrapper.propTypes = {
  isPrivate: bool,
  component: oneOfType([element, func]).isRequired,
}
RouteWrapper.defaultProps = {
  isPrivate: false,
}

export default RouteWrapper
