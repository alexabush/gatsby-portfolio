import React from "react"
import PropTypes from "prop-types" // ES6

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log("Error Caught in Error Boundary")
    if (this.props.componentName) {
      console.log("componentName", this.props.componentName)
    }
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>
    }

    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  componentName: PropTypes.string,
}
