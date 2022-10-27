import { Container, Theme, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { ReactElement } from 'react';
import Layout from '../src/components/Layout';
import UpdateForm from '../src/components/UpdateForm';

const styles = {
  container: (theme: Theme) => ({
    textAlign: 'center',
    marginBottom: 'auto',
    paddingTop: 10,
  }),
};

const Profile = () => {
  return (
    <>
      <Head>
        <title>Edit profile</title>
      </Head>
      <Container sx={styles.container}>
        <Typography component="h1" variant="h3">
          Edit your profile
        </Typography>

        <UpdateForm />
      </Container>
    </>
  );
};

export default Profile;

Profile.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
