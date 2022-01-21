import AsyncStorage from '@react-native-async-storage/async-storage';

/*let config = {}

try {
	let config = await AsyncStorage.getItem('@appConfig')
	
	if (config === null) {
		try {
			config = {
				lightMode: true
			}
			
			await AsyncStorage.setItem('@appConfig', JSON.stringify(config))
		} catch (e) {
			console.warn(e);
		}
	} else {
		config = JSON.parse(config)
	}
} catch (e) {
	console.warn(e)
}

export { config }*/

/*(async () => {
      let config = await AsyncStorage.getItem('@appConfig');
      return config
    })()*/

//let config = await AsyncStorage.getItem('@appConfig');

const lightMode = true

export { lightMode }