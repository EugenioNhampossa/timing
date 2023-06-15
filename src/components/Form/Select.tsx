import React from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import colors from 'tailwindcss/colors'
import { TAGS } from '../../utils'

const data = TAGS.map((tag) => ({ label: tag.title, value: tag.id }))

export const Select = ({ onChange }) => {
  return (
    <SelectDropdown
      data={data}
      onSelect={(selectedItem) => {
        onChange(selectedItem.value)
      }}
      buttonTextAfterSelection={(selectedItem) => {
        return selectedItem.label
      }}
      rowTextForSelection={(item) => {
        return item.label
      }}
      buttonStyle={{
        width: '100%',
        backgroundColor: colors.slate[200],
        borderRadius: 6,
        height: 40,
      }}
      buttonTextStyle={{
        textAlign: 'left',
        color: colors.gray[400],
        fontSize: 15,
      }}
      dropdownStyle={{ borderRadius: 6 }}
    />
  )
}
