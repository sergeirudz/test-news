import { Box, Button, Stack, TextField, Theme } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { login } from '../state/slices/userSlice';
import Cookies from 'js-cookie';

const styles = {
  container: (theme: Theme) => ({
    backgroundColor: 'white',
    padding: 3,
    // margin: 3,
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
  email: string;
  token: string;
}

const Form = () => {
  const {
    reset,
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormValuesProps>({
    mode: 'onTouched',
    resolver: yupResolver(FormSchema),
    defaultValues: {
      email: '',
      token: '', // d75afbbe392547cab29398b5cdfe542b
    },
  });

  const dispatch = useDispatch();

  const onSubmit = async (data: FormValuesProps) => {
    // await new Promise((resolve) => setTimeout(resolve, 500));
    reset();
    dispatch(
      login({
        user: data.email,
        token: data.token,
        loggedIn: true,
      })
    );
    Cookies.set('loggedIn', 'loggedIn');
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
            Login
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Form;
