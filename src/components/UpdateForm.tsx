import { Alert, Box, Button, Stack, TextField, Theme } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken, selectUser, update } from '../state/slices/userSlice';
import axios from 'axios';

const styles = {
  container: (theme: Theme) => ({
    backgroundColor: 'white',
    padding: 3,
    width: 300,
    marginTop: 3,
    marginLeft: 'auto',
    marginRight: 'auto',
  }),
};

const FormSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('That is not an email'),
  token: Yup.string()
    .required('Token is required')
    .test(
      'len',
      'Token must be exactly 32 characters',
      (val) => val?.length === 32
    ),
});

interface FormValuesProps {
  email: string | null;
  token: string | null;
}

const UpdateForm = () => {
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);

  console.log(user);
  const {
    reset,
    control,
    handleSubmit,
    setError,
    formState: { isSubmitSuccessful },
  } = useForm<FormValuesProps>({
    mode: 'onTouched',
    resolver: yupResolver(FormSchema),
    defaultValues: {
      email: user,
      token: token,
    },
  });

  const dispatch = useDispatch();
  const onSubmit = async (data: FormValuesProps) => {
    const request = {
      username: data.email,
      token: data.token,
    };

    try {
      const response = await axios({
        method: 'post',
        url: '/api/update',
        data: request,
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log(response);

      if (response.status === 200) {
        reset();
        dispatch(
          update({
            user: data.email,
            token: data.token,
            auth: true,
          })
        );
      }
    } catch (error) {
      // use with POST req validation
      // setError('token', { type: 'custom', message: 'Token is incorrect' });
      // setError('email', { type: 'custom', message: 'Incorrect user email' });
      console.log(error);
    }
  };

  return (
    <Box sx={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2.5} alignItems="flex-end">
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                label="Email address"
                error={Boolean(error)}
                helperText={error?.message}
              />
            )}
          />

          <Controller
            name="token"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                label="Token"
                error={Boolean(error)}
                helperText={error?.message}
              />
            )}
          />

          <Button fullWidth type="submit" variant="contained">
            Update Information
          </Button>
        </Stack>
      </form>
      {isSubmitSuccessful && (
        <Alert severity="success" color="info">
          Success, user updated!
        </Alert>
      )}
    </Box>
  );
};

export default UpdateForm;
