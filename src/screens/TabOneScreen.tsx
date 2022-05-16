import { StyleSheet } from 'react-native'
import { RootTabScreenProps } from '../../types'
import { Center, Text, Image } from 'native-base'
import { useQuery } from '@apollo/client'
import { PokemonDocument } from '@src/libs/graphql/pokemon.generate.graphql'

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  const { data } = useQuery(PokemonDocument)
  console.log(data)

  return (
    <Center flex={1}>
      {data && data.pokemon && data.pokemon.image && (
        <Image source={{ uri: data.pokemon.image }} width={100} height={100} />
      )}
      <Text>{data?.pokemon?.name}</Text>
    </Center>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})
