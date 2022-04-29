import { Container, Card, Row, Text, Grid } from "@nextui-org/react";
import styles from "./vegetable_tag.module.scss"
import { css, Button } from '@nextui-org/react';

export default function VegetableTag({
  key,
  children
}: {
  key: string | number,
  children: React.ReactNode
}) {
  return (
    <Grid key={key} >
      <Card className={styles.card} clickable bordered css={{padding: '0'}}>
        <main>{children}</main>
      </Card>
    </Grid>
  )
}