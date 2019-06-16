const { configure } = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');

// Setup enzyme's react adapter
configure({ adapter: new EnzymeAdapter() });
