const jestProcessDirectory = 'test-config/jest-preprocess.js'
const loadershimDirectory = 'test-config/loadershim.js'
const fileMockDirectory = '__mocks__/file-mock.js'

module.exports = {
    transform: {
        '^.+\\.[jt]sx?$': `<rootDir>/${jestProcessDirectory}`,
    },
    moduleNameMapper: {
        '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
        '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/${fileMockDirectory}`,
    },
    testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
    transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
    globals: {
        __PATH_PREFIX__: ``,
    },
    testURL: `http://localhost`,
    setupFiles: [`<rootDir>/${loadershimDirectory}`],
}
