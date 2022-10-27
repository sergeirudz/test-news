import { IconButton, InputBase, Paper, Theme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const styles = {
  paper: (theme: Theme) => ({
    padding: '2px 4px',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 300,
  }),
  inputBase: (theme: Theme) => ({
    width: '85%',
  }),
  iconButton: (theme: Theme) => ({
    marginRight: 0,
    marginLeft: 'auto',
  }),
};

const SearchInput = () => {
  return (
    <Paper component="form" sx={styles.paper}>
      <InputBase sx={styles.inputBase} placeholder="Search" />
      <IconButton type="submit" sx={styles.iconButton}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchInput;
