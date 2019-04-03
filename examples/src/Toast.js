import {NativeModules} from 'react-native';

var ToastModule = NativeModules.ToastModule

function show(message,location){
    if(location){
        ToastModule.showAndLocation(message,location)
    }else{
        ToastModule.show(message)
    }
}

var Toast = {
    show
}

module.exports = Toast