import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import api from '../axiosIndersptor';
import { FaUserAlt } from "react-icons/fa";
import useConversation from '../zustand/userConversation';

const drawerWidth = 240;

const SideBar = () => {
  const [users, setUsers] = React.useState([]);
  const { setSelectedConversation } = useConversation();

  React.useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get('/users/sidebar');
        if (response.status === 200) {
          setUsers(response.data.filterUsers);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchUsers();
  }, []);

  const handleUserClick = (user) => {
    setSelectedConversation(user);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {users.map((user) => (
              <ListItem key={user._id} disablePadding>
                <ListItemButton onClick={() => handleUserClick(user)}>
                  <ListItemIcon>
                    <FaUserAlt />
                  </ListItemIcon>
                  <ListItemText primary={user.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </Box>
  );
};

export default SideBar;
