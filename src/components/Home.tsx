import {createStyles, Grid, Paper, SimpleGrid, Skeleton, useMantineTheme } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper:{
    height:'100vh',
    padding:'2rem',
    background:theme.colorScheme === 'dark' ? '#000000' : '#ffffff'
  }
}))

const PRIMARY_COL_HEIGHT = 700;

const Home = () =>  {
  const {classes} = useStyles()
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;

  return (
    <div className={classes.wrapper}>
      <SimpleGrid cols={2} spacing="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <Grid gutter="md">
          <Grid.Col>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={true} />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
            {theme.colorScheme}
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
        </Grid>
        <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
      </SimpleGrid>
    </div>
  );
}

export default Home