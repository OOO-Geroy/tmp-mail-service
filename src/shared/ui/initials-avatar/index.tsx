import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { useMemo } from 'react';
import { stringToColor, stringToInitials } from 'shared/lib';

interface InitialsAvatarProps {
  value: string
}

export function InitialsAvatar({ value } : InitialsAvatarProps) {
  const [color, initials] = useMemo(() => [stringToColor(value), stringToInitials(value)], [value]);
  return (
    <Avatar sx={{
      bgcolor: color,
      width: 46,
      height: 46,
    }}
    >
      {initials}

    </Avatar>
  );
}
