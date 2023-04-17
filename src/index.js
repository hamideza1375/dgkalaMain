import React from 'react'
import ReactDOM from "react-dom/client";
import App from './App';
// import Icon3 from 'react-native-vector-icons/dist/FontAwesome5';


const iconFontStyles = `
        @font-face { src: url(${require('react-native-vector-icons/Fonts/FontAwesome5_Brands.ttf')}); font-family: FontAwesome5_Brands;  }
        @font-face { src: url(${require('react-native-vector-icons/Fonts/FontAwesome5_Regular.ttf')}); font-family: FontAwesome5_Regular;  }
        @font-face { src: url(${require('react-native-vector-icons/Fonts/FontAwesome5_Solid.ttf')}); font-family: FontAwesome5_Solid;  }
         }`

const style = document.createElement('style');
style.appendChild(document.createTextNode(iconFontStyles));
document.head.appendChild(style);




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// AppRegistry.registerComponent('newprj1', () => App)
// AppRegistry.runApplication('newprj1', { rootTag: document.getElementById('root') });




