import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type {PropsWithChildren} from 'react';

type ButtonType= PropsWithChildren<{
  name : string,
  flag : string,
}>


export default function CurrencyButton(props:ButtonType):JSX.Element {
  return (
<View>
      <Text>{props.flag}</Text>
      <Text>
        {props.name}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({})