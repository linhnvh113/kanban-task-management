import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useCreateBoard = <T>() =>
  useMutation({
    mutationFn: async (values: T) => {
      const response = await fetch('/api/boards', {
        method: 'POST',
        body: JSON.stringify(values),
      });
      const data = await response.json();
      return data;
    },
  });

export const useCreateTask = <T>() =>
  useMutation({
    mutationFn: async (values: T) => {
      const response = await axios.post('/api/tasks', values);
      return response.data;
    },
  });

export const useDeleteTask = <T>() =>
  useMutation({
    mutationFn: async (taskId: T) => {
      const response = await axios.delete(`/api/tasks/${taskId}`);
      return response;
    },
  });

export const useDeleteBoard = <T>() =>
  useMutation({
    mutationFn: async (boardId: T) => {
      const response = await axios.delete(`/api/boards/${boardId}`);
      return response;
    },
  });
