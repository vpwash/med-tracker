import { Link } from 'expo-router'
import { View, Text, TouchableOpacity } from 'react-native'

const LoginPage = () => {
  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <Link href={'/register'} asChild>
        <TouchableOpacity>
          <Text className='bg-slate-900 text-white py-5 px-10'>
            Create Account
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  )
}
export default LoginPage
