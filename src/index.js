import Testcomponent from './components/Testcomponent';

const wrapper = document.getElementById("component-container");
wrapper ? ReactDOM.render(<Testcomponent />, wrapper) : false;