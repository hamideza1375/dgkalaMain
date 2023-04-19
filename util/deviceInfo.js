import React, { useEffect } from 'react'
import { AppRegistry, Text, View, TouchableOpacity } from 'react-native';
import DeviceInfo, { getUniqueId, getManufacturer }  from 'react-native-device-info';


const App = () => {
  

  useEffect(() => {
    
    // DeviceInfo.getInstallerPackageName().then((installerPackageName) => {console.log(installerPackageName);});

    // DeviceInfo.getCarrier().then((carrier) => {console.log(carrier);});
    // let systemName = DeviceInfo.getSystemName();  console.log(systemName);
    // let systemVersion = DeviceInfo.getSystemVersion();  console.log(systemVersion);
    // DeviceInfo.getUserAgent().then((userAgent) => {console.log(userAgent); });
    // DeviceInfo.getAvailableLocationProviders().then((providers) => {console.log(providers);});
    // DeviceInfo.isLocationEnabled().then((enabled) => {console.log(enabled);    });
    // DeviceInfo.getIpAddress().then((ip) => {console.log(ip);});
    // DeviceInfo.getFreeDiskStorage().then((freeDiskStorage) => {console.log(freeDiskStorage); });


    // let appName = DeviceInfo.getApplicationName(); console.log(appName);
    // let brand = DeviceInfo.getBrand();  console.log(brand);
    // DeviceInfo.getDeviceName().then((deviceName) => {console.log(deviceName)});   


    // DeviceInfo.supportedAbis().then((abis) => {console.log(abis)});
    // DeviceInfo.getManufacturer().then((manufacturer) => {console.log(manufacturer); });
    // DeviceInfo.getMacAddress().then((mac) => {console.log(mac);});
    // DeviceInfo.getBuildId().then((buildId) => {console.log(buildId);});
    // let buildNumber = DeviceInfo.getBuildNumber();
    // console.log(buildNumber);
    // let type = DeviceInfo.getDeviceType();  console.log(type);
    // DeviceInfo.getHost().then((h)=>console.log(h))
    // DeviceInfo.getFontScale().then((fontScale) => {console.log(fontScale);});
    // DeviceInfo.getFreeDiskStorageOld().then((freeDiskStorage) => {console.log(freeDiskStorage);});
    
    // let version = DeviceInfo.getVersion(); console.log(version);
    // DeviceInfo.isHeadphonesConnected().then((enabled) => {console.log(enabled);    });
    // DeviceInfo.isPinOrFingerprintSet().then((isPinOrFingerprintSet) => {console.log(isPinOrFingerprintSet) });

    // let model = DeviceInfo.getModel(); console.log(model);
    // DeviceInfo.isBatteryCharging().then((isCharging) => {console.log(isCharging);});
    // DeviceInfo.getUsedMemory().then((usedMemory) => {console.log(usedMemory);});
    // DeviceInfo.isLandscape().then((lan)=>{console.log(lan);})
    // DeviceInfo.getTotalMemory().then((totalMemory) => {console.log(totalMemory);});
    // DeviceInfo.getPhoneNumber().then((phoneNumber) => {console.log(phoneNumber);});
  }, [])



  return (
    <View>
      <TouchableOpacity style={{ margin: 30, backgroundColor: 'red' }} >
        <Text >click</Text>
      </TouchableOpacity>
    </View>
  )
}


AppRegistry.registerComponent('prj', () => App)