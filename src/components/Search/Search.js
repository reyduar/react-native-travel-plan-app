import React, { useState } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Icon,
  DatePicker,
  Picker,
} from "native-base";

export default function Search() {
  const [datevalue, setDate] = useState(new Date());
  const _onDateChange = (e, newDate) => {
    setDate(newDate);
  };

  return (
    <Form>
      <Item>
        <Icon name="ios-home"></Icon>
        <Input placeholder="Origen" />
      </Item>
      <Item>
        <Icon name="ios-airplane"></Icon>
        <Input placeholder="Destino" />
      </Item>
      <Item>
        <Icon ios="ios-calendar" android="md-calendar"></Icon>
        <DatePicker
          placeHolderText="Fecha de Ida"
          androidMode={"default"}
          defaultDate={new Date(2021, 4, 4)}
          minimumDate={new Date(2021, 1, 1)}
          maximumDate={new Date(2021, 12, 31)}
          locale={"en"}
          timeZoneOffsetInMinutes={undefined}
          modalTransparent={false}
          animationType={"fade"}
          onChange={_onDateChange}
          value={datevalue}
        />
      </Item>
      {/* <Item>
        <Icon ios="ios-calendar" android="md-calendar"></Icon>
        <DatePicker
          placeHolderText="Fecha de Regreso"
          androidMode={"default"}
          onChange={_onDateChange}
          value={datevalue}
        />
      </Item> */}
      <Item>
        <Picker>
          <Picker.Item label="Adultos" value="0" />
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
          <Picker.Item label="5" value="5" />
          <Picker.Item label="6" value="6" />
          <Picker.Item label="7" value="7" />
        </Picker>
        <Icon name="person" />
      </Item>
      <Item>
        <Picker>
          <Picker.Item label="Niños" value="0" />
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
          <Picker.Item label="5" value="5" />
          <Picker.Item label="6" value="6" />
          <Picker.Item label="7" value="7" />
        </Picker>
        <Icon name="person" />
      </Item>
    </Form>
  );
}
