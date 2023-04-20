// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// sections
import { AppTasks, AppWidgetSummary } from '../sections/@dashboard/app';

export default function DashboardAppPage() {
  const theme = useTheme();

  return (
    <>
      <title> Dashboard | Minimal UI </title>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="New Users" total={1} icon="mdi:user" />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="New Posts"
              total={1}
              color="info"
              icon="mdi:note-plus"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Total Users"
              total={1}
              color="warning"
              icon="mdi:users-group"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Total Posts"
              total={1}
              color="error"
              icon="mdi:note"
            />
          </Grid>

          <Grid item xs={12}>
            <AppTasks
              title="Tasks"
              list={[{ id: '1', label: 'Finish this website' }]}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
