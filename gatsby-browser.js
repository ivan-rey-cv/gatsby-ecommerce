const React = require('react')
const RootComponent = require('./src/RootComponent').default

exports.wrapRootElement = ({ element }) => {
    return <RootComponent>{element}</RootComponent>
}
