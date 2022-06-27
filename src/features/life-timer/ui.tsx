import {
  Box, LinearProgress, Typography,
} from '@mui/material';
import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';

interface LifeTimerProps {
  exp?: string
}

function LinearProgressWithLabel({ value, label }: { value: number, label: string }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', color: 'grey.500' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress
          variant="determinate"
          color="inherit"
          value={value}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="inherit" whiteSpace="nowrap">
          {label}
        </Typography>
      </Box>
    </Box>
  );
}

export function LifeTimer({ exp = '' }: LifeTimerProps) {
  const [timestamp, setTimestamp] = useState(() => new Date().getTime() / 1000);
  const min = useRef(0);
  const max = useRef(0);
  const normalize = useCallback(
    (value: number) => (max.current ? Math.floor(100 - Math.min(
      ((value - min.current) * 100) / (max.current - min.current),
      100,
    )) : 0),
    [],
  );

  const normalizeMinutes = useCallback(
    (value: number) => {
      const totalSeconds = max.current ? Math.floor(Math.max(max.current - value, 0)) : 0;

      const minutes = Math.floor(totalSeconds / 60);

      const seconds = totalSeconds % 60;
      return max.current ? `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}` : '––:––';
    },
    [],
  );

  useEffect(() => {
    min.current = new Date().getTime() / 1000;
    max.current = new Date(exp).getTime() / 1000;
  }, [exp]);

  useEffect(() => {
    const tid = setInterval(() => {
      setTimestamp(new Date().getTime() / 1000);
    }, 1500);
    return () => clearInterval(tid);
  }, []);

  return (
    <LinearProgressWithLabel
      value={normalize(timestamp)}
      label={normalizeMinutes(timestamp)}
    />
  );
}
