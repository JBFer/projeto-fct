//import AsyncStorage from '@react-native-async-storage/async-storage';

//let config = { lightMode: true }

//try {
	//let config = AsyncStorage.setItem('@appConfig', JSON.stringify(false))
	
	/*
	AsyncStorage.getItem('@appConfig', (err, value) => {
		if (err) {
			console.log(err)
		} else {
			let config = JSON.parse(value) // boolean false
			return config
		}
	})

	 if (config === null) {
		try {
			config = {
				lightMode: true
			}
			AsyncStorage.setItem('@appConfig', JSON.stringify(config))

		} catch (e) {
			console.warn(e);
		}
	} else {
		config = JSON.parse(config)
	} 


} 

catch (e) {
	console.warn(e)
}
*/

//export { config }

/*(async () => {
      let config = await AsyncStorage.getItem('@appConfig');
      return config
    })()*/

//let config = await AsyncStorage.getItem('@appConfig');


// AsyncStorage.setItem('key', JSON.stringify(false))

/*
var detectChange = (function() {
	var flag = false;
	var lightMode = true;

	var getFlag = function() {
		return flag;
	};
	
	var getLightMode = function() {
		return lightMode;
	};

	var setFlag = function(detectChange) {
		flag = flag ? false : true;    
	};

	var setLightMode = function(detectChange) {
		lightMode = lightMode ? false : true;    
	};

	return {
		getFlag: getFlag,
		getLightMode: getLightMode,
		setFlag: setFlag,
		setLightMode: setLightMode,
	}
})();
  
export default detectChange;
*/

export default {
	lightMode: false,
	changes: false
};

//export { lightMode };