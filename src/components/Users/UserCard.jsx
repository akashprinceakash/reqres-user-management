import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Avatar,
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const UserCard = ({ user, onDelete, onEdit }) => {
  return (
    <Card>
      <CardContent>
        <Box display="flex" justifyContent="center" mb={2}>
          <Avatar
            src={user.avatar}
            alt={`${user.first_name} ${user.last_name}`}
            sx={{ width: 100, height: 100 }}
          />
        </Box>
        <Typography variant="h5" align="center" gutterBottom>
          {user.first_name} {user.last_name}
        </Typography>
        <Typography color="textSecondary" align="center" gutterBottom>
          {user.email}
        </Typography>
        <Box display="flex" justifyContent="space-around" mt={2}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<Edit />}
            onClick={() => onEdit(user.id)}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="error"
            startIcon={<Delete />}
            onClick={() => onDelete(user.id)}
          >
            Delete
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default UserCard;