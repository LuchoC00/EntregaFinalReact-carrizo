import { IconButton, TextField, Box } from '@mui/material';
import ListIcon from '@mui/icons-material/List';
import SearchIcon from '@mui/icons-material/Search';
import './Searcher.css';

const Searcher = () => {
  return (
    <div className="searcher">
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <IconButton>
          <ListIcon fontSize={'large'} />
          <p className="searcherFilter">Filter</p>
        </IconButton>
        <TextField
          id="standard-basic"
          label="Standard"
          variant="standard"
          color="grey"
          sx={{ width: '90%' }}
        />
        <IconButton>
          <SearchIcon fontSize={'large'} />
        </IconButton>
      </Box>
    </div>
  );
};

export default Searcher;
