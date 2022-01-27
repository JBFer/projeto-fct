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

const lightMode = true

export { lightMode };