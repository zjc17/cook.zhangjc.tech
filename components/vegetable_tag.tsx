import { Container, Card, Row, Text, Grid } from "@nextui-org/react";

export default function VegetableTag({
  key,
  children
}: {
  key: string | number,
  children: React.ReactNode
}) {
  return (
    <Grid key={key} >
      <Card clickable bordered>
        <main>{children}</main>
      </Card>
    </Grid>
  )
}