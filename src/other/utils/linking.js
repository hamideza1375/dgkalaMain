
import { Linking as _linking } from 'react-native'

const Linking = async (url) => {
    await _linking.openURL(url);
}

export default Linking

{/* <iframe src="https://maps.google.com/maps?q=35.69877132,51.39243716&amp;hl=es;z=14&amp;output=embed" style="height: 100%; width: 100%; border: 0px;" __idm_frm__="80"></iframe> */ }
{/* <a href="adbps:">tubeembed.com</a> */ }
{/* <a href="sms:">tubeembed.com</a> */ }
{/* <a href="tel:">tubeembed.com</a> */ }
{/* <a href="mailto:">tubeembed.com</a> */ }
{/* <a href={`geo:${p.route.params.latlng.lat},${p.route.params.latlng.lng}`} target="_blank">Click here for map</a> */ }