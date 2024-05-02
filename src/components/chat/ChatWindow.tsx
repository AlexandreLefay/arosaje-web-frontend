import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, List, ListItem, ListItemText, TextField, Typography } from '@mui/material';

type Message = {
  senderId: string;
  receiverId: string;
  content: string;
};

export const ChatWindow: React.FC = () => {
  const [userId, setUserId] = useState('');
  const [receiverId, setReceiverId] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    if (!userId) {
      return;
    } // Ne pas ouvrir le WebSocket si l'userId n'est pas défini

    // Ajoute le userId à l'URL de connexion WebSocket
    const socketUrl = `ws://localhost:9000/chat?userId=${encodeURIComponent(userId)}`;
    ws.current = new WebSocket(socketUrl);

    ws.current.onopen = () => {
      console.log('WebSocket is open now.');
    };

    ws.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages((prev) => [...prev, message]);
    };

    ws.current.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    ws.current.onclose = (event) => {
      console.log(`WebSocket is closed now. Reason: ${event.reason}`);
    };

    return () => {
      ws.current?.close();
      ws.current = null;
    };
  }, [userId]); // Redémarre le WebSocket si userId change

  const sendMessage = () => {
    if (inputValue && ws.current && ws.current.readyState === WebSocket.OPEN) {
      const message: Message = {
        senderId: userId,
        receiverId,
        content: inputValue
      };
      ws.current.send(JSON.stringify(message));
      setMessages((prev) => [...prev, message]);
      setInputValue('');
    } else {
      console.error('WebSocket is not open.');
    }
  };

  return (
    <Box sx={{ maxWidth: 500, margin: '0 auto', p: 2 }}>
      <Typography variant="h5" component="h1" gutterBottom>
        Chat Setup
      </Typography>
      <TextField
        fullWidth
        label="Your User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        variant="outlined"
        margin="normal"
      />
      <TextField
        fullWidth
        label="Receiver User ID"
        value={receiverId}
        onChange={(e) => setReceiverId(e.target.value)}
        variant="outlined"
        margin="normal"
      />
      <Typography variant="h4" component="h2" gutterBottom>
        Chat with {receiverId}
      </Typography>
      <List sx={{ maxHeight: 300, overflow: 'auto', bgcolor: 'background.paper' }}>
        {messages.map((msg, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={msg.senderId === userId ? 'You' : msg.senderId}
              secondary={msg.content}
              primaryTypographyProps={{
                color: msg.senderId === userId ? 'primary' : 'secondary',
                fontWeight: 'fontWeightMedium'
              }}
            />
          </ListItem>
        ))}
      </List>
      <Box
        component="form"
        sx={{ display: 'flex', alignItems: 'center', mt: 1 }}
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage();
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          label="Type a message"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <Button type="submit" sx={{ ml: 1 }} variant="contained">
          Send
        </Button>
      </Box>
    </Box>
  );
};
