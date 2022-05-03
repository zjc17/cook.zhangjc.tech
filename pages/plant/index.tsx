import React, { useState } from "react";
import { Card, Row, Text, Grid, Spacer, useTheme } from "@nextui-org/react";
import AboutLayout from "../../components/layouts/AboutLayout";
import plantJsonData from '../../data/plant.json'
import { Plant, PlantItem } from "../../components/types/plant";
import { Icon } from '@iconify/react';
import plantPot from '@iconify/icons-charm/plant-pot';

function PlantCard({ plantItem }: { plantItem: PlantItem }) {
  return (
    <Grid css={{ padding: '4px 8px' }}>
      <a href={plantItem.link} target='_blank'>
        <Card>
          <Card.Body css={{ padding: '4px 8px' }}>
            <Text h6 weight='normal' >
              {plantItem.name}
            </Text>
          </Card.Body>
        </Card>
      </a>
    </Grid>
  )
}

export default function PlantComponent() {
  const [plantData, setPlantData] = useState(plantJsonData);
  const plants = plantData as Plant
  const { theme, type } = useTheme()
  return (
    <AboutLayout menuActivePath="/plant">

      <Row justify="center" align="center" >
        <Icon icon={plantPot} width="44" height="44" color={type === 'light' ? theme.colors.green600.value : theme.colors.green400.value} />
      </Row>
      <Row justify="center" align="center">
        <Text h5 weight="normal">今天我们来种菜！</Text>
      </Row>
      <Spacer y={2} />
      <Grid.Container xl css={{ backgroundColor: theme.colors.accents1.value, padding: '8px' }}>
      {/* </Grid.Container>
      <Grid.Container xl> */}
        <Row wrap="wrap" justify="center" align="center" >
          {plants.map((value, index) => (
            <PlantCard plantItem={value} />
          ))}
        </Row>
      </Grid.Container>
    </AboutLayout>
  )
}
