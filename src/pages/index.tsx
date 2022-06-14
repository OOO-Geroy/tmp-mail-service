import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './home';
import { MessageDetailPage } from './message-detail';
import { MessageListPage } from './message-list';

export function Routing() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route index element={<MessageListPage />} />
        <Route path=":seq" element={<MessageDetailPage />} />
      </Route>
    </Routes>
  );
}
